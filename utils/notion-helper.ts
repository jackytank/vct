import { Article, TagFrequencyMap } from "@/types/notion-type";
import { Client } from "@notionhq/client";
import axios, { AxiosResponse } from "axios";
import React, { cache } from "react";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

export const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// ------------------------------ version 1 - Basic -> BEGIN ------------------------------
export const fetchPages = React.cache(() => {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            property: "Status",
            select: {
                equals: "Published",
            },
        },
    });
});

export const fetchPageBySlug = React.cache((slug: string) => {
    return notion.databases
        .query({
            database_id: process.env.NOTION_DATABASE_ID!,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        })
        .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const getPageContent = React.cache((pageId: string) => {
    return notion.blocks.children
        .list({ block_id: pageId })
        .then((res) => res.results as BlockObjectResponse[]);
});

// ------------------------------ version 1 - Basic -> END ------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------ version 2 - Professional -> BEGIN ------------------------------

export const getNotionPages = cache(() => {
    console.log('----------------getNotionPages');
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            and: [
                {
                    property: "status",
                    select: {
                        equals: "Published",
                    },
                },
                {
                    property: "type",
                    select: {
                        equals: "Post",
                    },
                },
            ],
        },
        sorts: [
            {
                property: "date",
                direction: "ascending",
            },
        ],
    });

});
export const getPageProperties = cache((pageId: string) => {
    return notion.pages.retrieve({ page_id: pageId });
});
export const getAllPosts = async (): Promise<Article[]> => {
    const response = await getNotionPages();
    const publishedPosts: Article[] = response.results.map((e) =>
        convertToPost(e)
    );
    return publishedPosts;
};

export function filterArticles(articles: Article[], selectedTag: string | null): Article[] {
    return articles
        .toSorted((_a, b) => Number(new Date(b.date)))
        .filter((article: Article) => {
            if (selectedTag === null) {
                return true;
            }
            return article.tags.includes(selectedTag);
        });
}

export default function getLocalizedDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export const convertToPost = (item: any): Article => {
    return {
        id: item.id,
        title: item.properties.title.title[0].text.content,
        date: item.properties.date.date.start,
        type: item.properties.type.select.name,
        slug: item.properties.slug.rich_text[0].text.content,
        status: item.properties.status.select.name,
        tags: item.properties.tags.multi_select.map(
            (tag: { name: string; }) => tag.name
        ),
        summary: item.properties.summary.rich_text.map(
            (textObj: { text: { content: string; }; }) => textObj.text.content
        ),
        coverImage: item.properties?.coverImage?.files[0]?.file?.url,
        author: item.properties.author.created_by.name
    };
};

export const calculateTagFrequency = async ({
    publishedPosts,
}: {
    publishedPosts: Article[];
}) => {
    let allTags: string[] = [];
    const tagFrequencyMap: TagFrequencyMap = {};

    // Concatenate tags from posts into allTags array
    publishedPosts.forEach((post) => {
        allTags = [...allTags, ...post.tags];
    });

    // Create a frequency map of tags
    allTags.forEach((tag) => {
        tagFrequencyMap[tag] = (tagFrequencyMap[tag] || 0) + 1;
    });

    return tagFrequencyMap;
};

const getFilteredPagesByTagSlug = cache((tags: string[], slug: string, databaseId: string) => {
    return notion.databases.query({
        database_id: databaseId,
        filter: {
            and: [
                {
                    or: tags.map((tag) => ({
                        property: "tags",
                        multi_select: {
                            contains: tag,
                        },
                    })),
                },
                {
                    // Replace "unique_id" with the actual property name
                    property: "slug",
                    rich_text: {
                        does_not_equal: slug,
                    },
                },
            ],
        },
        sorts: [
            {
                property: "date",
                direction: "ascending",
            },
        ],
        page_size: 2, // Limit to 2 articles
    });
});
export const renderNotionContent = cache(async (content: BlockObjectResponse[]) => {
    const notionRenderer = new NotionRenderer({
        client: notion,
    });
    notionRenderer.use(hljsPlugin({}));
    notionRenderer.use(bookmarkPlugin(undefined));
    return await notionRenderer.render(...content);
});

export const getTagFilteredPostsByTagsAndSlug = async ({
    tags,
    slug,
}: {
    tags: string[];
    slug: string;
}): Promise<Article[]> => {
    try {
        const databaseId = process.env.NOTION_DATABASE_ID!;
        const response = await getFilteredPagesByTagSlug(tags, slug, databaseId);
        const tagFilteredPosts: Article[] = response.results.map((e) =>
            convertToPost(e)
        );
        return tagFilteredPosts;
    } catch (error) {
        console.error("Error fetching tag-filtered posts:", error);
        throw error;
    }
};

const getPageTagBySlug = cache((slug: string, databaseId: string) => {
    return notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "tags",
            multi_select: {
                contains: `${slug}`,
            },
        },
        sorts: [
            {
                property: "date",
                direction: "ascending",
            },
        ],
    });
});


export const getTagFilteredPostsBySlug = async ({
    slug,
}: {
    slug: string;
}): Promise<Article[]> => {
    try {
        const databaseId = process.env.NOTION_DATABASE_ID!;
        const response = await getPageTagBySlug(slug, databaseId);

        const tagFilteredPosts: Article[] = response.results.map((e) =>
            convertToPost(e)
        );

        return tagFilteredPosts;
    } catch (error) {
        // Handle the error, log it, or throw a more specific exception if needed.
        console.error("Error fetching tag-filtered posts:", error);
        throw error;
    }
};


export function FormatDate(inputDate: string): string {
    // Convert input date string to a Date object
    const dateObject = new Date(inputDate);

    // Format the Date object in an awesome way
    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    return formattedDate;
}

interface SlackMessage {
    text: string;
}

export const sendSlackMessage = async (message: SlackMessage): Promise<AxiosResponse | void> => {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK;

    if (!slackWebhookUrl) {
        console.error('Slack webhook URL is not defined.');
        return;
    }

    try {
        const response = await axios.post(slackWebhookUrl, message);
        return response;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error sending Slack message:', error.message);
            // Handle the error as needed
        } else {
            console.error('An unexpected error occurred:', error);
            // Handle other types of errors or log them
        }
    }
};
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
// ------------------------------ version 2 - Professional -> END ------------------------------