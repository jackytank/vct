import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Trang giới thiệu của Vườn Cổ Tích - Vườn Cổ Tích",
  // other metadata
};

export default function DocsPage() {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/4">
            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
              <ul className="space-y-2">
                <SidebarLink />
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-3/4">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h1>Chào mừng đến với Vườn Cổ Tích - Vườn Cổ Tích</h1>

              <p className="text-body-color dark:text-body-color-dark text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, minus perspiciatis, quod repellat impedit fuga neque vitae quis voluptatibus itaque praesentium, molestiae at. Quasi odio tenetur nemo, ratione mollitia tempore.
              </p>
              <p className="text-body-color dark:text-body-color-dark text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque tenetur eius tempore perspiciatis perferendis velit nemo est, eum dicta rerum amet labore corrupti quisquam consequatur reiciendis, alias reprehenderit! Esse!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
