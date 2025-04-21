"use client";
import styles from '../page.module.css';
import Image from 'next/image'; 
export default function Products() {
    return (
        <div className={styles.elements}>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                BulkBites 
                </h2>
                
                <div className={styles.gridContainer}>
                    <div className={styles.Item}>
                            <Image 
        src="/public/Screenshot 2025-04-21 104650.png" // put your image in the public/images folder
        alt="BulkBites app screenshot"
        width={300}
        height={200}
    /> 
                                       <Image 
        src="/public/Screenshot 2025-04-21 104703.png" // put your image in the public/images folder
        alt="BulkBites app screenshot 2"
        width={300}
        height={200}
    />
                                          <Image 
        src="/public/Screenshot 2025-04-21 104713.png" // put your image in the public/images folder
        alt="BulkBites app screenshot 3"
        width={300}
        height={200}
    />
                        
                        <p className={styles.Type}>Mobile app</p>
                        <p className={styles.ProductName}>Health and fitness</p>
                        <p className={styles.Description}>Set to be the world's best AI-powered calorie tracker. An All-in-One app for cooking recipes, workout assistance and accurate macronutrient breakdown.</p>
                        <a className={styles.Status} href='https://bulkbites.tensorbuilds.tech'>Click Here</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
