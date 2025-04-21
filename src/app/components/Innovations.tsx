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
                        <img src="Screenshot 2025-04-21 104650.png" className={styles.largeImage} alt="BulkBites app screenshot"/>
                         <img src="Screenshot 2025-04-21 104703.png" className={styles.largeImage} alt="BulkBites app screenshot 2"/>
                        <img src="Screenshot 2025-04-21 104713.png" className={styles.largeImage} alt="BulkBites app screenshot 3"/>
                        
                        <p className={styles.Type}>Mobile app</p>
                        <p className={styles.ProductName}>Health and fitness</p>
                        <p className={styles.Description}>Set to be the world&rsquo;s best AI-powered calorie tracker. An All-in-One app for cooking recipes, workout assistance and accurate macronutrient breakdown.</p>
                        <a className={styles.Status} href='https://bulkbites.tensorbuilds.tech'>Click Here</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
