"use client";
import LandingPage from "./LandingPage";
import Teams from "./Teams";
import Initiatives from "./Initiatives";
import styles from "../page.module.css";
import Products from "./Products";
import Introduction from "./Introduction";
import BulkBites from "./Bulkbites";
export default function MainContent() {
    return (
        <main className={styles.main}>

            <LandingPage />
            <Introduction />
            <BulkBites />
            <Products />
            
            <Teams/>
            <Initiatives />
            <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer" >
                
            </a>
        </main>
    );
}
