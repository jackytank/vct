import Search from "@/components/Notion-CMS/Search";
import { Article } from "@/types/notion-type";
import { getTagFilteredPostsBySlug, getAllPosts, calculateTagFrequency } from "@/utils/notion-helper";

export default async function Page({ params }: Readonly<{ params: { slug: string; }; }>) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode URL-encoded string
  const tagFilteredPosts = await getTagFilteredPostsBySlug({ slug: decodedSlug });
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <div className="max-w-5xl m-auto p-4 min-h-screen">
      <Search
        publishedPosts={tagFilteredPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </div>
  );
}
