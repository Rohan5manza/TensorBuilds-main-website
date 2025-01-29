"use client";
import styles from "../page.module.css";

export default function Initiatives() {
    return (
        <>
        <h2 className={styles.heading}>Our Initiative</h2>
        <div className={styles.ContainerFA}>
        <img src='Neuralangelo.png' className={styles.Neuralangelo} ></img>
    <div className={styles.contentsFA}>
    <div className={styles.maincontainer}>
                <div className={styles.thecard}>
                <div className={styles.thefront}>
                    <h1>Think Outside The Box.</h1>
                    <p>Under TOTB, we make tech videos spanning multiple domains</p>
                    <p>We focus on turning ideas into products and growing software businesses.</p>
                    <p>Content includes YouTube videos, guides, tutorials, and books as educational resources.</p>
                    <p>We teach how to build software products, codebases, teams, and deploy projects.</p>
                    <p>We curate and document AI models and innovations while offering peer-reviewed content for accuracy.</p>
                    <p>Expand AI research and develop practical products to grow the startup.</p>
                   
                    <h2>^^^ hover ^^^</h2>
                </div>
                <div className={styles.theback}>
                    <h1>Think Outside The Box </h1>
                    <p>We provide free technical articles, tutorials, and a newsletter on AI research and industry trends.</p>
                    <p>We aim to build an open-source community on Discord and GitHub for AI research, focusing on various research topics such as neural scaling laws and model interpretability, and much more.</p>
                    <p>We help individuals build project portfolios, prepare for AI exams, and guide them for hackathons</p>
                    <p>Offer programming help to teams 60% into their project in exchange for 10% future profits.</p>
                    <p>Provide on-demand consulting services for teams via a dedicated platform.</p>
                    <h2>^^^ hover ^^^</h2>
                </div>

            </div>
            </div>    
            </div>
        </div >
        </>
    )
};
