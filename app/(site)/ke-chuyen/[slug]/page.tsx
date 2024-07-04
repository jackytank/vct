import Container from "@/components/Notion-CMS/Container";
import ArticleList from "@/components/Notion-CMS/Feed";
import SocialshareButtons from "@/components/Notion-CMS/SocialshareButtons";
import TopScrollButton from "@/components/Notion-CMS/TopScrollButton";
import TestTextToSpeech from "@/components/TextToSpeech/TestTextToSpeech";
import { Article } from "@/types/notion-type";
import getLocalizedDate, { notion, convertToPost, getAllPosts, getTagFilteredPostsByTagsAndSlug, getPageContent } from "@/utils/notion-helper";
import { toSpeechUsingGoogleCloud } from "@/utils/text-to-speech-helper";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import Link from "next/link";

export default async function Page({
    searchParams,
}: Readonly<{
    searchParams: { [key: string]: string; };
}>) {
    const { id } = searchParams;
    const response = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
        next: { revalidate: 60 },
    });
    const blockMap = await response.json();
    const pageProperties = await notion.pages.retrieve({ page_id: id });
    console.log('response', response);
    console.log('pageProperties', pageProperties);
    const postDetails = convertToPost(pageProperties);
    console.log('postDetails', postDetails);
    const moreArticles: Article[] = await getAllPosts();
    const formattedTime = getLocalizedDate(postDetails.date);
    const slug = postDetails.slug || [];
    const tags = postDetails.tags || [];
    const content = await getPageContent(id);
    // Pass id instead of uniqueId
    const tagPosts: Article[] = await getTagFilteredPostsByTagsAndSlug({ tags, slug: String(slug) });

    const notionRenderer = new NotionRenderer({
        client: notion,
    });
    notionRenderer.use(hljsPlugin({}));
    notionRenderer.use(bookmarkPlugin(undefined));
    const html = await notionRenderer.render(...content);

    return (
        <div className="py-20 lg:py-25 xl:py-30 space-y-5 max-w-7xl m-auto min-h-screen">
            <img alt="cannot-load" className="object-cover w-full h-52 xl:rounded-[20px] aspect-video" src={postDetails.coverImage} />

            <div>
                <div className="text-center space-y-5 text-sm mx-auto mt-3">
                    <div className="tracking-tight sm:text-4xl">
                        {postDetails.title}
                    </div>
                    <div className="text-md leading-8 sm:mt-4">
                        <div>
                            <time dateTime={formattedTime}>{formattedTime}</time>
                        </div>
                        <div className="font-semibold">
                            {postDetails.author}
                        </div>
                        <SocialshareButtons
                            shareUrl={`http://localhost:3000/${postDetails.slug}?id=${postDetails.id}`}
                            title={postDetails.title}
                        />
                    </div>
                </div>
                <TestTextToSpeech text={html} />
                <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 pt-4 border-t mt-4" dangerouslySetInnerHTML={{ __html: html }}>
                </div>
                <div className="py-12 border-t">
                    <Container>
                        <div className="flex items-center justify-between my-8">
                            <div className="text-3xl font-bold text-gray-900">Latest articles</div>
                            <Link href="/ke-chuyen">
                                <span className="font-semibold text-gray-900 cursor-pointer">
                                    More articles ➜
                                </span>
                            </Link>
                        </div>
                        <ArticleList articles={tagPosts} />
                    </Container>
                </div>
            </div>
            <TopScrollButton />
        </div>
    );
}
