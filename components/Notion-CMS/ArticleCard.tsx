'use client';
import { Article } from "@/types/notion-type";
import getLocalizedDate from "@/utils/notion-helper";
import { motion } from "framer-motion";
import slugify from "slugify";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Readonly<Props>) {
  const slug = slugify(article.slug).toLowerCase();
  const formattedTime = getLocalizedDate(article.date);

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
    >
      <a href={`/ke-chuyen/${slug}?id=${article.id}`}>
        <div className="group flex cursor-pointer flex-col overflow-hidden">
          <div className="relative">
            <div className="absolute">
              {article?.tags?.map((tag) => (
                <div
                  key={tag}
                  className="relative left-3 top-3 z-[2] mb-2 mr-2 inline-flex items-center rounded bg-gray-100 px-3 py-1.5 text-xs font-bold uppercase text-gray-600 shadow"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className=" contrast-[0.9] filter">
              <img
                className="aspect-video h-52 w-full rounded-lg bg-gray-50 object-cover transition group-hover:opacity-90"
                src={article.coverImage}
                alt={"article cover"}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white py-4">
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-900">
                {article.title}
              </p>
              <p className="mt-3 line-clamp-2 text-base text-gray-500">
                {article.summary}
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <div className="mb-2 flex space-x-1 text-sm text-gray-400">
                {article.tags.map((tag) => (
                  <div key={tag}>
                    <span className="font-semibold text-gray-600">{tag} </span>
                    <span aria-hidden="true">&middot;</span>
                  </div>
                ))}
                <time dateTime={formattedTime}>{formattedTime}</time>
              </div>
              {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
