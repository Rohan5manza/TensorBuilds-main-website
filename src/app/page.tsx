// "use client";
// import Image from "next/image";
// import styles from "./page.module.css";
// import { MdEmail } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import Spline from '@splinetool/react-spline'
// import Background from './components/Background.js';
// import React, { useCallback } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Script from 'next/script';
// export default function Home() {
//   const [emblaRef, emblaApi] = useEmblaCarousel()

//   return (

//     <div className={styles.page}>
//       <Script
//         src="https://js.storylane.io/js/v2/storylane.js"
//         strategy="lazyOnload"
//         async
//       />
//       <header className={styles.header}>
//         <div className={styles.logoSection}>
//           <img src="/infraedge.png" alt="Logo" className={styles.logo} />
//           <span className={styles.brandName}>
//             Infraedge
//           </span>
//         </div>
//         <nav className={styles.navbar}>
//           <a href="/">Home</a>
//           <a href="/demo">Demo</a>
//           <a href="/features">Features</a>
//           <a href="/contact">Contact</a>

//         </nav>
//       </header>
//       <main className={styles.main}>

//         <Spline className={styles.spline1}
//           scene="https://prod.spline.design/FJIfFV62BQSZFTs1/scene.splinecode"
//         />
//         <div className={styles.elements}>
//           <h1>What is Infraedge ?</h1>
//           <div className={styles.youtube}>
//             <iframe src="https://www.youtube.com/embed/xPyJ2XhSKOI?si=I9U86w3NprsgGYnk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//           </div>
//         </div>
//         <div className={styles.elements}>
//           <img src="/astronaut.png" alt="Astronaut" className={styles.images} />
//           <div className={styles.content}>

//             <h2>Explore our wide variety of cloud applications and solutions on our servers !</h2>
//             <ol className={styles.container}>
//               <li className={styles.typetext}>Launch any app manually on our deployment platform</li>
//               <li className={styles.typetext}> Choose from a wide variety of apps on our servers</li>
//               <li className={styles.typetext}> Submit your requests from dockerhub as well</li>
//               <li className={styles.typetext}> Customers can send requests to deploy any app, and get a personal URL for them.</li>
//               <li className={styles.typetext}> Example of a note-taking app for a user</li>
//               <li className={styles.typetext}> Access our server software to learn cloud, Linux, and deployment steps.</li>
//             </ol>
//           </div>
//         </div>
//         <div className={styles.compare}>
//           <div className={styles.card}>
//             <h2>Other Apps</h2>
//             <ol>
//               <li>expensive cloud stacks & complex setup requirements</li>
//               <li>No wide variety of apps available</li>
//               <li>Limited free-tier opportunity</li>
//               <li>Time-consuming, and high entry barriers.</li>
//               <li>No personal domains</li>
//               <li>Lack of beginner-friendly resources</li>
//             </ol>
//           </div>
//           <div className={styles.card}>
//             <h2>InfraEdge</h2>
//             <ol>
//               <li>One-click or one-request deployments</li>
//               <li>Access to our server software to get hands-on experience</li>
//               <li>Access apps from anywhere</li>
//               <li>You get our beginner-friendly educational resource</li>
//               <li>Personal subdomains for each user</li>
//               <li>Zero technical knowledge required</li>
//             </ol>
//           </div>
//         </div>
//         <div className={styles.elements}>
//           <div className={styles.content}>
//             <h2>What do you get ?</h2>
//             <p>199/- per month subscription plan</p>
//             <ol>
//               <li>You can send us requests for deploying and running 5 lightweight applications( any app from our list, or your own websites, web apps or custom requests), and your own personal URL for each of those. (example : customer_app1.tensorbuilds.tech).
//                 Each user gets a maximum of 25 GB storage space, and infinite CPU time.</li>
//               <li>Contact us for any changes to be made in your app( if you want full automation).Or if you want to remove one app and launch another one in its place.
//                 Else you can simply use our continuous integration/ deployment(CI/CD) backend to push changes in real time yourself.</li>
//               <li>Our alternative platform to Vercel stack for hosting web applications.
//                 Head over to our link to start building and deploying your own applications from our app list.</li>
//             </ol>
//           </div>
//           <img src="/sphere.png" alt="Globe" className={styles.image} />
//         </div>
//         <div className={styles.elements}>
//           <img src="/puzzle.png" alt="puzzle" className={styles.image} />
//           <div className={styles.content}>
//             <h2>Before 1st march 2025 :</h2>
//             <h4>Free access to server software and education resources bundle</h4>
//             <p>269/- per month subscription plan</p>
//             <ol>
//               <li>5 lightweight apps.</li>
//               <li>Subdomains per app </li>
//               <li>Infinite CPU time. </li>
//               <li>25 gb storage max. </li>
//               <li>Server software.</li>
//               <li>Educational bundle.</li>
//               <li>1 VM per user( try out himself)
//                 FULL money-back guarantee, in case of dissatisfaction within a month's plan</li>
//               <li>Refund is applicable only when reclaimed within 29 days max. After that, once your subscription ends, we will not provide any refunds.</li>
//             </ol>
//           </div>
//         </div>
//         <div className={styles.content}>
//           <h3>Disclaimer</h3>
//           <ol>
//             <li>All user data is the sole responsibility of the user. Although we have reliable redundancy and backup systems on our servers, we cannot fully guarantee your data. Please make sure to have some backups of any important data you may have.</li>
//             <li>Support is available only for lightweight applications. No GPU support right now. Coming soon.</li>
//           </ol>
//         </div>
//         <a
//           href="https://www.youtube.com/"
//           target="_blank"
//           rel="noopener noreferrer" ><Spline
//             scene="https://prod.spline.design/gohhZXPLZm-P4NNu/scene.splinecode"
//           />
//         </a>


//       </main>
//       <footer className={styles.footer}>
//         <div className={styles.footercontent}>
//           <div className={styles.brandsection}>
//             <img src="/tensorflow.png" alt="Logo" className={styles.logo} />
//             <img src="/infraedge.png" alt="Logo" className={styles.logo} />
//             <span className={styles.brandname}>TensorBuilds</span>
//           </div>
//           <div className={styles.linkssection}>
//             <div className={styles.column}>
//               <h4>RESOURCES</h4>
//               <a href="#">InfraEdge</a>
//               <a href="#">TensorBuilds Website</a>
//             </div>
//             <div className={styles.column}>
//               <h4>FOLLOW US</h4>
//               <a href="#">GitHub</a>
//               <a href="#">LinkedIn</a>
//             </div>
//             <div className={styles.column}>
//               <h4>LEGAL</h4>
//               <a href="#">Privacy Policy</a>
//               <a href="#">White Paper Link</a>
//             </div>
//           </div>
//         </div>
//         <div className={styles.footerbottom}>
//           <p>&copy; 2024 InfraEdge. All Rights Reserved.</p>
//           <div className={styles.socialicons}>
//             <a
//               href="mailto:info@example.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <MdEmail />
//               Email
//             </a>
//             <a
//               href="https://www.linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin />
//               LinkedIn
//             </a>
//             <a
//               href="https://www.instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram />
//               Instagram
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      
      <MainContent />
      <Footer />
    </div>
  );
}
