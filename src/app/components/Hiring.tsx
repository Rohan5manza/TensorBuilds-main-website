"use client";
import styles from "../page.module.css";

export default function Hiring() {
    return (
        <div className={styles.Container}>
        <div className={styles.contents}>
            <h2>We are hiring !</h2>
            
                <li>TensorBuilds is currently hiring interns</li>
                <li>A few interns have already been accepted under this program!</li>
                <li>Interested software developers are welcome for pursuing internships by applying for following domains:</li>

            <h3>1.SaaS platform page design.</h3>
            <ol><li>Next.js, Vercel, FastAPI, google OAuth, MongoDB, SaaS analytics, Razorpay.</li></ol>
            <h3>2.ML/DL dev</h3>
            <ol><li>Machine learning model building, deployment, API scripts, RAG pipelines, and fine-tuning AI models.</li></ol> 
            <a className={styles.Status} href='https://forms.gle/Ss9VFSDeBSoiE2tZ6'>Apply here</a>
        </div> 
        <img className={styles.sphere} src="sphere.png" ></img>
        </div>
    );
}
