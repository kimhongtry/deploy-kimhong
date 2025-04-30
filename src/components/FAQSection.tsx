// // import React, { useState } from "react";

// // interface FAQItem {
// //   question: string;
// //   answer: string | TSX.Element;
// // }

// // const faqData: FAQItem[] = [
// //   {
// //     question: "What is Sooper Books?",
// //     answer:
// //       "Sooper Books is a revolutionary story streaming service, backed and approved by all five BBC Dragons.",
// //   },
// //   {
// //     question: "How does it work?",
// //     answer: (
// //       <>
// //         <p>
// //           <b>Stream everything with a free membership.</b> Unlimited read access
// //           on our website and get unlimited access to Sooper Radio, our 24/7
// //           audio stream (in the app)
// //         </p>
// //         <p>
// //           <b>Premium makes it more convenient.</b> Upgrading unlocks our entire
// //           audio collection for on-demand access, gives you new world-class
// //           stories every week and let's you listen offline — it's like having a
// //           team of multi-Emmy-winning storytellers in your pocket!
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "The top 10 reasons why families choose Sooper Books",
// //     answer: (
// //       <ol className="list-inside pl-[1em] my-[1em] list-decimal">
// //         <li>They say their kids LOVE it!</li>
// //         <li>They say our stories are better</li>
// //         <li>They say it’s consistent and reliable</li>
// //         <li>They say it’s really easy to use</li>
// //         <li>They say the free plan is very generous</li>
// //         <li>They say there’s lots to choose from</li>
// //         <li>They say it helps at bedtime</li>
// //         <li>They say it helps on long journeys</li>
// //         <li>They say it noticeably improves attention (when used regularly)</li>
// //         <li>
// //           They say it noticeably improves vocabulary (when used regularly)
// //         </li>
// //       </ol>
// //     ),
// //   },
// //   {
// //     question: "What is the Sooper Radio?",
// //     answer:
// //       "Sooper Radio is our 24/7 free story streaming service — only available in the Sooper Books app.",
// //   },
// //   {
// //     question: "What is the difference between the website and the mobile app?",
// //     answer: (
// //       <>
// //         <p>The website is for reading. The app is for listening.</p>
// //         <p>Why?</p>
// //         <p>Well, we started as a free reading website.</p>
// //         <p>Then lots of families asked for an audio app.</p>
// //         <p>So, ummm, that’s what we built.</p>
// //         <p>And to make the app accessible we created a generous free plan.</p>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "What’s included in the free plan?",
// //     answer: (
// //       <>
// //         <p>— Unlimited access to read everything on our website</p>
// //         <p>
// //           — Unlimited access to Sooper Radio (our 24/7 audio stream in the app)
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "Why upgrade to Premium?",
// //     answer: (
// //       <>
// //         <p>The short answer is ultimate peace of mind.</p>
// //         <p>
// //           Audio stories are hugely beneficial to children's behaviour, mental
// //           health and development.
// //         </p>
// //         <p>
// //           But to get the full benefit you need really good ones, and a lot of
// //           them.
// //         </p>
// //         <p>That's exactly what Sooper Premium does.</p>
// //         <p>
// //           It gives you instant access to our entire audio collection, written by
// //           our multi-Emmy-winning storytellers.
// //         </p>
// //         <p>And we craft new stories for you every single week.</p>
// //         <p>And you can listen offline.</p>
// //         <p>
// //           It's a bit like having a little army of world-class storytellers in
// //           your pocket.
// //         </p>
// //         <p>And no other story service even comes close.</p>
// //         <p>
// //           If you're looking for the highest possible quality of audio stories to
// //           help your kids and you want them on tap, then Sooper Premium is your
// //           answer.
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "Can I listen to stories on the website?",
// //     answer: (
// //       <>
// //         <p>No — the app is where you listen.</p>
// //         <p>
// //           Sooper Radio is our 24/7 free story stream. Or you can upgrade to
// //           listen on-demand and offline.
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "Do I have to pay for the mobile app?",
// //     answer:
// //       "No — we have a generous free plan which includes Sooper Radio (our 24/7 free audio stream)",
// //   },
// //   {
// //     question: "How do I sign up for the mobile app?",
// //     answer: (
// //       <p>
// //         Sign up in seconds, just click{" "}
// //         <a
// //           className="text-primary underline hover:text-primary/80 transition-colors text-white hover:text-white/80"
// //           href="/signup/?target=appstore"
// //         >
// //           here
// //         </a>
// //         .
// //       </p>
// //     ),
// //   },
// //   {
// //     question: "Can I cancel my subscription?",
// //     answer:
// //       "Yes, you can cancel your membership at any time through your account settings. Once cancelled, you’ll retain access to your premium features until the end of your billing cycle.",
// //   },
// // ];

// // const FAQSection: React.FC = () => {
// //   const [activeIndex, setActiveIndex] = useState<number | null>(null);

// //   const toggleAnswer = (index: number) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   return (
// //     <div
// //       className="relative md:pl-0 md:pr-[40px] xl:pr-[30px] md:min-h-[--h] flex justify-end pb-[80px] xl:pb-[120px]"
// //       style={{ "--h": "490px" }}
// //     >
// //       <div className="absolute -top-[115px] right-0 px-20 md:top-0 md:right-auto md:left-0 overflow-hidden z-0 w-[134px] md:w-[301px] xl:w-[490px]">
// //         <img
// //           alt=""
// //           loading="lazy"
// //           width={440}
// //           height={490}
// //           decoding="async"
// //           className="bg-transparent relative mt-30 ml-[-15px] md:ml-0 aspect-[--ratio]"
// //           src="https://assets.sooperbooks.com/home-pics/8fff76b3-f2a7-43db-b2ca-fbd9faf57bdbmonty1.440x490.webp"
// //           style={{ color: "transparent", "--ratio": "440 / 490" }}
// //         />
// //       </div>
// //       <div className="md:basis-3/5 flex flex-col gap-[20px] relative z-10 pt-[30px] md:pt-[60px] w-full">
// //         {faqData.map((item, index) => (
// //           <div
// //             key={index}
// //             className="rounded-[10px] p-[20px] md:p-[22px] bg-pink-600 text-black flex flex-col cursor-pointer gap-0 transition-all not-desktop:snap-start delay-300"
// //             onClick={() => toggleAnswer(index)}
// //           >
// //             <div className="text-[18px] xl:text-[20px] relative pr-[30px]">
// //               <p className="!text-left leading-none !font-basic text-[20px] font-normal normal-case">
// //                 {item.question}
// //               </p>
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="20"
// //                 height="14"
// //                 viewBox="0 0 20 14"
// //                 className={`fill-current absolute top-0 right-0 translate-y-1/3 transition-transform ${
// //                   activeIndex === index ? "rotate-180" : ""
// //                 }`}
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M9.116 13.384a1.25 1.25 0 0 0 1.768 0l8.75-8.75a1.25 1.25 0 0 0-1.768-1.768L10 10.732 2.134 2.866A1.25 1.25 0 1 0 .366 4.634z"
// //                   clipRule="evenodd"
// //                 ></path>
// //               </svg>
// //             </div>
// //             <div
// //               className={`text-[16px] font-light transition-all delay-100 duration-300 overflow-hidden ${
// //                 activeIndex === index ? "max-h-[500px]" : "max-h-0"
// //               }`}
// //             >
// //               {item.answer}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQSection;

// import React, { useState } from "react";  // Ensure React is imported

// // Define the FAQItem interface with correct types
// interface FAQItem {
//   question: string;
//   answer: string | JSX.Element;  // This allows string or JSX to be used
// }

// const faqData: FAQItem[] = [
//   {
//     question: "What is Sooper Books?",
//     answer:
//       "Sooper Books is a revolutionary story streaming service, backed and approved by all five BBC Dragons.",
//   },
//   {
//     question: "How does it work?",
//     answer: (
//       <>
//         <p>
//           <b>Stream everything with a free membership.</b> Unlimited read access
//           on our website and get unlimited access to Sooper Radio, our 24/7
//           audio stream (in the app).
//         </p>
//         <p>
//           <b>Premium makes it more convenient.</b> Upgrading unlocks our entire
//           audio collection for on-demand access, gives you new world-class
//           stories every week, and lets you listen offline — it's like having a
//           team of multi-Emmy-winning storytellers in your pocket!
//         </p>
//       </>
//     ),
//   },
//   // Add other FAQ items here...
// ];

// const FAQSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleAnswer = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div
//       className="relative md:pl-0 md:pr-[40px] xl:pr-[30px] md:min-h-[--h] flex justify-end pb-[80px] xl:pb-[120px]"
//       style={{ "--h": "490px" } as React.CSSProperties}
//     >
//       <div className="absolute -top-[115px] right-0 px-20 md:top-0 md:right-auto md:left-0 overflow-hidden z-0 w-[134px] md:w-[301px] xl:w-[490px]">
//         <img
//           alt=""
//           loading="lazy"
//           width={440}
//           height={490}
//           decoding="async"
//           className="bg-transparent relative mt-30 ml-[-15px] md:ml-0 aspect-[--ratio]"
//           src="https://assets.sooperbooks.com/home-pics/8fff76b3-f2a7-43db-b2ca-fbd9faf57bdbmonty1.440x490.webp"
//           style={
//             {
//               color: "transparent",
//               "--ratio": "440 / 490",
//             } as React.CSSProperties
//           }
//         />
//       </div>
//       <div className="md:basis-3/5 flex flex-col gap-[20px] relative z-10 pt-[30px] md:pt-[60px] w-full">
//         {faqData.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-[10px] p-[20px] md:p-[22px] bg-pink-600 text-black flex flex-col cursor-pointer gap-0 transition-all not-desktop:snap-start delay-300"
//             onClick={() => toggleAnswer(index)}
//           >
//             <div className="text-[18px] xl:text-[20px] relative pr-[30px]">
//               <p className="!text-left leading-none !font-basic text-[20px] font-normal normal-case">
//                 {item.question}
//               </p>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="14"
//                 viewBox="0 0 20 14"
//                 className={`fill-current absolute top-0 right-0 translate-y-1/3 transition-transform ${
//                   activeIndex === index ? "rotate-180" : ""
//                 }`}
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M9.116 13.384a1.25 1.25 0 0 0 1.768 0l8.75-8.75a1.25 1.25 0 0 0-1.768-1.768L10 10.732 2.134 2.866A1.25 1.25 0 1 0 .366 4.634z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//             <div
//               className={`text-[16px] font-light transition-all delay-100 duration-300 overflow-hidden ${
//                 activeIndex === index ? "max-h-[500px]" : "max-h-0"
//               }`}
//             >
//               {typeof item.answer === "string" ? (
//                 <p>{item.answer}</p>
//               ) : (
//                 item.answer
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;
