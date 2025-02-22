"use client";
import styles from "../page.module.css";

export default function Innovations() {
    return (
        <>
        <h2 className={styles.heading}>BulkBites</h2>
        <h3 className={styles.content}>Mobile app with computer vision for food calorie estimation, recipe cooking and workout assistant.</h3>
        <div className={styles.compare}>
            <div className={styles.card1}>
                <h2>Download now</h2>
                <ol>
                    <li>CLick here</li> 
                </ol>
                <li className={styles.ComingSoon}>Coming Soon.</li>
            </div>
        </div>
        </>
    );
}
