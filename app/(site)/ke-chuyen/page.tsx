import Search from "@/components/Notion-CMS/Search";
import { Article } from "@/types/notion-type";
import { getAllPosts, calculateTagFrequency } from "@/utils/notion-helper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kể Chuyện",
  description: "Trang kể chuyện của Vườn Cổ Tích - Vườn Cổ Tích",
  // other metadata
};

export const revalidate = 1;

const BlogPage = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-5xl m-auto p-4 min-h-screen">
        <Search
          publishedPosts={publishedPosts}
          tagFrequencyMap={tagFrequencyMap}
        />
      </div>
    </section>
  );
};

export default BlogPage;
