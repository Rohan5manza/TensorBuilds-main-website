"use client";
import styles from "../page.module.css";

export default function Initiatives() {
    return (
        <>
            <h2 className={styles.heading}>Our Initiative</h2>
            <div className={styles.imageGrid}>
                {/* First Image */}
                <div className={styles.imageContainer}>
                    <img src="Neuralangelo.png" className={styles.largeImage} alt="Neuralangelo"/>
                    <div className={styles.overlay}>
                        <h1>Think Outside The Box.</h1>
                        <p>Under TOTB, we make tech videos spanning multiple domains.</p>
                        <p>We focus on turning ideas into products and growing software businesses.</p>
                        <p>Content includes YouTube videos, guides, tutorials, and books as educational resources.</p>
                    </div>
                </div>

                {/* Second Image */}
                <div className={styles.imageContainer}>
                    <img src="NewImage.png" className={styles.largeImage} alt="New Image"/>
                    <div className={styles.overlay}>
                        <h1>Innovation & AI.</h1>
                        <p>We curate and document AI models and innovations while offering peer-reviewed content for accuracy.</p>
                        <p>Expand AI research and develop practical products to grow the startup.</p>
                        <p>Providing the latest insights in AI, deep learning, and software engineering.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
