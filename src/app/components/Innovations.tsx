"use client";
import styles from "../page.module.css";

export default function Innovations() {
    return (
        <>
        <h2 className={styles.heading}>Pursuing Innovation</h2>
        <div className={styles.compare}>
            <div className={styles.card1}>
                <h2>Turbotune</h2>
                <ol>
                    <li>We release fine-tuned quantized models tailored for unique use cases and optimized for constrained compute resources.</li>
                    <li>Our innovative models are supported by proprietary code systems and packages designed to enhance their usability and functionality.</li>
                    <li>We contribute to the open-source community by making some of our base models freely available for public use.</li>          
                </ol>
                <li className={styles.ComingSoon}>Coming Soon..</li>
            </div>
            <div className={styles.card2}>
                <h2>Featurelens</h2>
                <ol>
                    <li>The package helps visualize how different prompts impact Large Language Models (LLMs), supporting prompt engineers in refining their prompt strategies.</li>
                    <li>It provides tools for understanding feature explainability in black box models, allowing for better transparency and insight into how inputs affect outputs.
                    </li>
                    <li>Built with PyTorch modules, the package is easy to install via pip and comes with comprehensive documentation for smooth integration into existing workflows.</li>    
                </ol>
                <li className={styles.ComingSoon}>Coming Soon..</li>
            </div>
        </div>
        </>
    );
}
