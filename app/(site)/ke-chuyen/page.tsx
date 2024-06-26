import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Search from "@/components/Notion-CMS/Search";
import { Article } from "@/types/notion-type";
import { getAllPosts, calculateTagFrequency } from "@/utils/notion-helper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kể Chuyện",
  description: "Trang kể chuyện của Thiên Đăng - Vườn Cổ Tích",
  // other metadata
};

const BlogPage = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        {/* <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div> */}
        <div className="max-w-5xl m-auto p-4 min-h-screen">
          <Search
            publishedPosts={publishedPosts}
            tagFrequencyMap={tagFrequencyMap}
          />
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
