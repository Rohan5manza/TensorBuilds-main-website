"use client";
import styles from '../page.module.css';

export default function Products() {
    return (
        <div className={styles.elements}>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                BulkBites 
                </h2>
                
                <div className={styles.gridContainer}>
                    <div className={styles.Item}>
                        <p className={styles.Type}>Mobile app</p>
                        <p className={styles.ProductName}>Health and fitness</p>
                        <p className={styles.Description}>An upcoming computer vision app for food recognition and estimation of calories & macronutrients.Designed to help bodybuilders with their workouts, and assist with cooking recipes.</p>
                        <a className={styles.Status} href='/'>Coming soon</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
