"use client";
import styles from "../page.module.css";

export default function Initiatives() {
    return (
        <>
        <h2 className={styles.heading}>Our Initiatives</h2>
        <div className={styles.ContainerFA}>
        <img src='Neuralangelo.png' className={styles.Neuralangelo} ></img>
    <div className={styles.contentsFA}>
    <div className={styles.maincontainer}>
                <div className={styles.thecard}>
                <div className={styles.thefront}>
                    <h1>Think Out of The Box.</h1>
                    <p>Free initiative offering videos and educational materials for guidance.</p>
                    <p>Focus on turning ideas into products and growing software businesses.</p>
                    <p>Content includes YouTube videos, guides, tutorials, and books.</p>
                    <p>Teach how to build software products, codebases, teams, and deploy projects.</p>
                    <p>Offer programming help to teams 60% into their project in exchange for 10% future profits.</p>
                    <p>Provide on-demand consulting services for teams via a dedicated platform.</p>
                    <h2>^^^ hover ^^^</h2>
                </div>
                <div className={styles.theback}>
                    <h1>(Research Initiative) GradientDev </h1>
                    <p>Provide free technical articles, tutorials, and a newsletter on AI research and industry trends.</p>
                    <p>Build an open-source community on Discord and GitHub for AI research, focusing on neural scaling laws and model interpretability.</p>
                    <p>Help individuals build project portfolios, prepare for AI exams, and support hackathon readiness.</p>
                    <p>Curate and document AI models and innovations while offering peer-reviewed content for accuracy.</p>
                    <p>Expand AI research and develop practical products to grow the startup.</p>
                    <h2>^^^ hover ^^^</h2>
                </div>

            </div>
            </div>    
            </div>
        </div >
        </>
    )
};