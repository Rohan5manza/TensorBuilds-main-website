"use client";
import styles from "../page.module.css";
import { useEffect,useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import Opportunities from "./Opportunities";
import Link from "next/link";
export default function LandingPage() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

  // Apply the theme to the root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
    return (
        
        <>
        
        <div className={styles.elements}>
        <header className={styles.header}>
            <div className="container mx-auto flex justify-center items-center flex-wrap">
                <img src="/tensorbuilds.png" alt="Logo" className={styles.logo} />

            </div>
            <nav className={styles.navbar}>
                <a href="/">Home</a>
                <a href="https://infraedge.vercel.app/">InfraEdge</a>
                <a href="https://wa.me/qr/LUDMYTACVQGHC1">Contact</a>
            </nav>
            <button onClick={toggleTheme}><IoMoonOutline className={styles.mode}/></button>
        </header>
            <div className={styles.background}>
            <video
  src="bg_video.mp4"
  muted
  loop
  autoPlay
/>
<img src="mask.jpg" className={styles.mask }/>
            <h2>Tensorbuilds</h2></div>
        </div></>
    );
}
