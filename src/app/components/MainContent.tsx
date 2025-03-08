"use client";
import LandingPage from "./LandingPage";
import Teams from "./Teams";
import Initiatives from "./Initiatives";
import Innovations from "./Innovations";
import styles from "../page.module.css";
import Products from "./Products";
import Introduction from "./Introduction";
export default function MainContent() {
    return (
        <main className={styles.main}>

            <LandingPage />
            <Innovations />
            <Initiatives />
            <Teams/>
            <Introduction />
            <Products />
            
            <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer" >
                
            </a>
        </main>
    );
}
