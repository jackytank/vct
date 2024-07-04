import BackstageImages from '@/components/BackstageImages';
import { motion } from 'framer-motion';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Hậu Trường",
    description: "Trang hậu trường của Vườn Cổ Tích - Vườn Cổ Tích",
};

const BackstagePage = async () => {
    return (
        <div className="mt-20 bg-white dark:bg-gray-800 sm:py-8 py-20 lg:py-25 xl:py-30">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Kho ảnh hậu trường</h2>

                        <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                            Những hình ảnh hậu trường của Vườn Cổ Tích - Vườn Cổ Tích
                        </p>
                    </div>

                    <a href="/"
                        className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                        Xem thêm
                    </a>
                </div>
                <BackstageImages />
            </div>
        </div>
    );
};

export default BackstagePage;