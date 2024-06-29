// import RelatedPost from "@/components/Blog/RelatedPost";
// import SharePost from "@/components/Blog/SharePost";
// import { Metadata } from "next";
// import Image from "next/image";
// import TextToSpeech from "../../../../components/TextToSpeech";

// export const metadata: Metadata = {
//   title: "Chuyện chi tiêt",
//   description: "Trang chuyện chi tiết của Thiên Đăng - Vườn Cổ Tích",
//   // other metadata
// };

// const SingleBlogPage = async () => {

//   const text = `
//                   Ngày xưa, có hai anh em nhà kia, sau khi cha mẹ qua đời, người anh chiếm tất cả gia tài, chỉ cho em mỗi một cây khế ở góc vườn. Người em đành nhẫn nhịn, hằng ngày chăm sóc, mong cây sớm ra quả.
//                   Đến mùa, cây khế bói rất nhiều quả to, chín mọng. Một hôm, có con chim đại bàng lớn từ đâu bay tới, đậu trên cây, ăn hết quả này đến quả khác. Người em buồn rầu than thở : “Chim ăn hết khế, ta lấy gì mà sống đây ?”. Nghe vậy, đại bàng liền đáp: “Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng”. Sau đó, chim cất cánh bay đi.
//                   Người em lấy vải may một cái túi nhỏ. Vài ngày sau, đại bàng đến chở người em bay ra một hòn đảo vắng. Trên đảo có rất nhiều vàng bạc. Người em đựng vàng vào túi rồi cưỡi lên lưng chim bay về. Từ đó, người em trở nên giàu có và thường giúp đỡ dân nghèo.

//                    Ít lâu sau, người anh sang chơi, thấy em giàu có thì hết sức ngạc nhiên, bèn gặng hỏi. Người em thành thực kể lại mọi chuyện. Người anh nài nỉ đòi đổi gia tài của mình lấy cây khế. Người em chiều anh nên cũng bằng lòng. Người anh ngày ngày chực sẵn bên gốc cây. Đại bàng lại đến ăn khế. Người anh giả vờ phàn nàn. Chim cũng đáp lời: “Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng”.
//                   Người anh may sẵn một cái túi mười hai gang. Khi chim đưa anh ta ra đảo, anh ta nhặt vàng nhét đầy vào tủi, lại còn giắt thêm vào xung quanh người. Đại bàng cố sức đập cánh bay lên. Bởi túi vàng to và nặng quá nên đến giữa biển, chim kiệt sức lảo đảo. Thế là người anh và cả túi vàng rơi tõm xuống biển sâu.

//                   Ý NGHĨA

//                   CÂY KHẾ là câu chuyện về tình cảm gia đình – là anh em trong một gia đình phải yêu thương, đùm bọc và đoàn kết. Không chỉ vậy, câu chuyện còn răn dạy con người ta không nên quá tham lam, phải có lao động thì mới có thành quả để gặt hái, phải biết ơn người đã giúp đỡ mình.
//   `;

//   return (
//     <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
//       <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//         <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
//           <div className="md:w-1/2 lg:w-[32%]">
//             {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
//               <form
//                 action="https://formbold.com/s/unique_form_id"
//                 method="POST"
//               >
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Tìm truyện..."
//                     className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
//                   />

//                   <button
//                     className="absolute right-0 top-0 p-5"
//                     aria-label="search-icon"
//                   >
//                     <svg
//                       className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
//                       width="21"
//                       height="21"
//                       viewBox="0 0 21 21"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
//                     </svg>
//                   </button>
//                 </div>
//               </form>
//             </div> */}

//             {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
//               <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
//                 Categories
//               </h4>

//               <ul>
//                 <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                   <a href="#">Blog</a>
//                 </li>
//                 <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                   <a href="#">Events</a>
//                 </li>
//                 <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                   <a href="#">Grids</a>
//                 </li>
//                 <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                   <a href="#">News</a>
//                 </li>
//                 <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                   <a href="#">Rounded</a>
//                 </li>
//               </ul>
//             </div> */}

//             <RelatedPost />
//           </div>

//           <div className="lg:w-2/3">
//             <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
//               <div className="mb-10 w-full overflow-hidden ">
//                 <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                   <Image
//                     src={"/images/blog/aktv-header-banner.jpg"}
//                     alt="Kobe Steel plant that supplied"
//                     fill
//                     className="rounded-md object-cover object-center"
//                   />
//                 </div>
//               </div>

//               <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
//                 ĂN KHẾ TRẢ VÀNG
//               </h2>

//               <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
//                 <li>
//                   <span className="text-black dark:text-white">Author: </span>{" "}
//                   Thien Dang
//                 </li>
//                 <li>
//                   <span className="text-black dark:text-white">
//                     Đăng ngày: 30/7/2023
//                   </span>
//                   {" "}
//                 </li>
//                 <li>
//                   <span className="text-black dark:text-white">
//                     Danh mục:
//                   </span>
//                   Cổ tích
//                 </li>
//               </ul>

//               <TextToSpeech text={text} />
//               {/* <TestTextToSpeech text={text} /> */}

//               <div className="blog-details">
//                 <p>
//                   Ngày xưa, có hai anh em nhà kia, sau khi cha mẹ qua đời, người anh chiếm tất cả gia tài, chỉ cho em mỗi một cây khế ở góc vườn. Người em đành nhẫn nhịn, hằng ngày chăm sóc, mong cây sớm ra quả.
//                   Đến mùa, cây khế bói rất nhiều quả to, chín mọng. Một hôm, có con chim đại bàng lớn từ đâu bay tới, đậu trên cây, ăn hết quả này đến quả khác. Người em buồn rầu than thở : “Chim ăn hết khế, ta lấy gì mà sống đây ?”. Nghe vậy, đại bàng liền đáp: “Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng”. Sau đó, chim cất cánh bay đi.
//                   Người em lấy vải may một cái túi nhỏ. Vài ngày sau, đại bàng đến chở người em bay ra một hòn đảo vắng. Trên đảo có rất nhiều vàng bạc. Người em đựng vàng vào túi rồi cưỡi lên lưng chim bay về. Từ đó, người em trở nên giàu có và thường giúp đỡ dân nghèo.
//                 </p>

//                 <p>
//                   Ít lâu sau, người anh sang chơi, thấy em giàu có thì hết sức ngạc nhiên, bèn gặng hỏi. Người em thành thực kể lại mọi chuyện. Người anh nài nỉ đòi đổi gia tài của mình lấy cây khế. Người em chiều anh nên cũng bằng lòng. Người anh ngày ngày chực sẵn bên gốc cây. Đại bàng lại đến ăn khế. Người anh giả vờ phàn nàn. Chim cũng đáp lời: “Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng”.
//                   Người anh may sẵn một cái túi mười hai gang. Khi chim đưa anh ta ra đảo, anh ta nhặt vàng nhét đầy vào tủi, lại còn giắt thêm vào xung quanh người. Đại bàng cố sức đập cánh bay lên. Bởi túi vàng to và nặng quá nên đến giữa biển, chim kiệt sức lảo đảo. Thế là người anh và cả túi vàng rơi tõm xuống biển sâu.
//                 </p>

//                 <div className="flex flex-wrap gap-5">
//                   <Image
//                     src={"/images/blog/aktv-content-1.jpg"}
//                     width={700}
//                     height={400}
//                     alt="image"
//                   />
//                   {/* <Image
//                     src={"/images/blog/blog-02.png"}
//                     width={350}
//                     height={200}
//                     alt="image"
//                   /> */}
//                 </div>

//                 <h3 className="pt-8">
//                   Ý NGHĨA
//                 </h3>

//                 <p>
//                   CÂY KHẾ là câu chuyện về tình cảm gia đình – là anh em trong một gia đình phải yêu thương, đùm bọc và đoàn kết. Không chỉ vậy, câu chuyện còn răn dạy con người ta không nên quá tham lam, phải có lao động thì mới có thành quả để gặt hái, phải biết ơn người đã giúp đỡ mình.
//                 </p>
//               </div>

//               <SharePost />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleBlogPage;
