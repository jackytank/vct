import ServiceItems from '@/components/ServiceItems';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Dịch Vụ",
    description: "Trang dịch vụ của Thiên Đăng - Vườn Cổ Tích",
};

const ServicesPage = () => {
    return (
        <>
            {/* component */}
            <div
                id="services"
                className="py-20 lg:py-25 xl:py-30 section relative pb-20 pt-40 mt-15 md:pt-16 md:pb-0"
            >
                <div className="container xl:max-w-6xl mx-auto px-4">
                    {/* Heading start */}
                    <header className="text-center mx-auto mb-12 lg:px-20">
                        <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
                            Dịch vụ của chúng tôi
                        </h2>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 60"
                            style={{ margin: "0 auto", height: 35 }}
                            xmlSpace="preserve"
                        >
                            <circle
                                cx="50.1"
                                cy="30.4"
                                r={5}
                                className="stroke-primary"
                                style={{
                                    fill: "transparent",
                                    strokeWidth: 2,
                                    strokeMiterlimit: 10
                                }}
                            />
                            <line
                                x1="55.1"
                                y1="30.4"
                                x2={100}
                                y2="30.4"
                                className="stroke-primary"
                                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                            />
                            <line
                                x1="45.1"
                                y1="30.4"
                                x2={0}
                                y2="30.4"
                                className="stroke-primary"
                                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                            />
                        </svg>
                        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                            Tiết kiệm thời gian quản lý quảng cáo &amp; Nội dung cho doanh nghiệp của bạn.
                        </p>
                    </header>
                    {/* End heading */}
                    {/* row */}
                    
                        <ServiceItems />
                    
                    {/* end row */}
                </div>
            </div>
        </>

    );
};

export default ServicesPage;