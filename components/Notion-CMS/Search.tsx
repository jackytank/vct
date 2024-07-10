  "use client";

  import { Input } from "@/components/Notion-CMS/input";
  import { useState } from "react";
  import Tags from "./Tags";
  import { useParams } from "next/navigation";
  import Feed from "./Feed";
  import { Article, TagFrequencyMap } from "@/types/notion-type";

  const Search = ({
    publishedPosts,
    tagFrequencyMap,
  }: {
    publishedPosts: Article[];
    tagFrequencyMap: TagFrequencyMap;
  }) => {
    const [searchValue, setSearchValue] = useState("");

    const params = useParams();
    const { slug } = params;

    const normalizedSlug = typeof slug === "string" ? slug.replace(/%20/g, " ") : slug;
    const filteredBlogPosts = publishedPosts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(" ") : "";
      const searchContent = post.title + post.summary + tagContent;
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (
      <>
        <div className="mb-5">
          <Input
            placeholder={slug ? `Tìm truyện trong #${normalizedSlug}` : "Tìm truyện"}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <Tags tagFrequencyMap={tagFrequencyMap} />
        </div>

        {!filteredBlogPosts.length && (
          <p className="text-gray-500 text-center">No posts found.</p>
        )}

        <Feed articles={filteredBlogPosts} />
      </>
    );
  };

  export default Search;
