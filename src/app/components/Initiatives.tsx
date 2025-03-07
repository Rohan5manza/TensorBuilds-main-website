"use client";
import styles from "../page.module.css";

export default function Initiatives() {
    return (
        <>
            <h2 className={styles.heading}>Our Initiative</h2>
            <h2>Think Outside The Box.</h2>
            <div className={styles.imageGrid}>
                {/* First Image */}
                    <div>
                        <p>Under TOTB, we make tech videos spanning multiple domains.</p>
                        <p>This is our content-creation led growth engine to promote BulkBites, and to share our technical journey along the process in a fun way.</p>
                        <p>Content includes YouTube videos, guides, tutorials, and books as educational resources.</p>
                    </div>
                </div>

                {/* Second Image */}
                <div className={styles.imageContainer}>
                    <img src="NewImage.png" className={styles.largeImage} alt="New Image"/>
                </div>
            </div>
        </>
    );
};
