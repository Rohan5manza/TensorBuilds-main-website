"use client";
import styles from '../page.module.css';

export default function Products() {
    return (
        <div className={styles.elements}>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                Our other product lines (discontinued)  
                </h2>
                
                <div className={styles.gridContainer}>
                    <div className={styles.Item}>
                    <img src="infraedge.png" alt="Personal URL" className={styles.gridImage} />
                        <p className={styles.Type}>Cloud Services</p>
                        <p className={styles.ProductName}>InfraEdge</p>
                        <p className={styles.Description}>Custom app hosting made simple. Move your projects to our servers at the lowest costs. Use our BETTER alternative platform to Vercel. Personalized support every step of the way.</p>
                        <a className={styles.Status} href='https://infraedge.tensorbuilds.tech/'>Access here</a>
                    </div>
                    <div className={styles.Item}>
                    <img src="WealthifyAI.jpg" alt="Personal URL" className={styles.gridImage} />
                        <p className={styles.Type}>Unified Trading Dashboard</p>
                        <p className={styles.ProductName}>WealthifyAI</p>
                        <p className={styles.Description}>Leverage advanced AI algorithms and quant strategies to maximize profits for your trading journey. Get insights across all market sections with the help of accurate recommendations.</p>
                        <a className={styles.Status} href='https://wealthifyai-next.vercel.app/'>Access here</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
