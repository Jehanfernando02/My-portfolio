// "use client"

// import { motion } from "framer-motion"

// export default function About() {
//   return (
//     <section id="about" className="py-20 relative">
//       <div className="hero-glow absolute top-1/4 right-1/4"></div>

//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[1, 2, 3, 4].map((item) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: item * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="card p-6 glow-border"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-md bg-purple-500/30 flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       className="w-6 h-6 text-purple-400"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">Citi on the Mobile</h3>
//                     <p className="text-gray-400 text-sm mb-4">
//                       Led the design team in creating a mobile banking experience
//                     </p>
//                     <a href="#" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
//                       Learn more
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <p className="text-gray-300">
//               I'm currently looking to join a <span className="text-purple-400">cross-functional</span> team
//               <br />
//               that values improving people's lives through accessible design.
//             </p>

//             <div className="flex justify-center gap-4 mt-6">
//               {["github", "twitter", "linkedin", "dribbble", "behance"].map((platform) => (
//                 <motion.a
//                   key={platform}
//                   href="#"
//                   whileHover={{ y: -3 }}
//                   className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
//                 >
//                   <span className="sr-only">{platform}</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-4 h-4"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
//                     />
//                   </svg>
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

