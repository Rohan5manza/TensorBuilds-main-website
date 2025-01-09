"use client";
import styles from '../page.module.css';

export default function Products() {
    return (
        <div className={styles.elements}>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                What do we exactly offer ?
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
                    <div className={styles.Item}>
                    <img src="SynapseIQ.jpg" alt="Personal URL" className={styles.gridImage} />
                        <p className={styles.Type}>AI-based learning assistant</p>
                        <p className={styles.ProductName}>SynapseIQ</p>
                        <p className={styles.Description}>AI based learning education assistant. Multimodal features for syllabus summaries. Perfect for teachers and students.</p>
                        <a className={styles.Status}>Coming soon</a>
                    </div>
                    <div className={styles.Item}>
                    <img src="BulkBites.jpg" alt="Personal URL" className={styles.gridImage} />
                        <p className={styles.Type}>CV food app for bodybuilders</p>
                        <p className={styles.ProductName}>BulkBites</p>
                        <p className={styles.Description}>Calorie tracker for your food. Get rid of weighing scales. A real-time recipe assistant and workout planner. Upload your physique photos and cooking videos to track progress and get AI insights for your diet and workouts. Perfectly tailored for bodybuilders.</p>
                        <a className={styles.Status}>Coming soon</a>
                    </div>
                    <div className={styles.Item}>
                    <img src="ContentForge.jpg" alt="Personal URL" className={styles.gridImage} />
                        <p className={styles.Type}>GenAI content creation</p>
                        <p className={styles.ProductName}>ContentForge</p>
                        <p className={styles.Description}>A unified platform for generating content for your use cases, with a mixture of various modalities like audio, video, images and text. Perfect for story writers, animators, and content creators.</p>
                        <a className={styles.Status}>Coming soon</a>
                    </div>
                    <div className={styles.Item}>
                    <img src="NeuroCanvas.jpg" alt="Personal URL" className={styles.gridImage} />
                        <p className={styles.Type}>ML project monitoring dashboard</p>
                        <p className={styles.ProductName}>NeuroCanvas</p>
                        <p className={styles.Description}>A unified platform for running ML projects, track experiments, save dataset info, training logs, visualize deep learning models, and an IDE/code editor & assistant specially for ML.</p>
                        <a className={styles.Status}>Coming soon</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
