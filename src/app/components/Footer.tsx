"use client";
import styles from "../page.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footercontent}>
            </div>
            <div className={styles.footerbottom}>
                <p>&copy; 2025 InfraEdge. Built by TensorBuilds. All Rights Reserved.</p>
                <div className={styles.socialicons}>
                    <a href="mailto:tensorbuilds@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail />
                        Email
                    </a>
                    <a href="https://www.linkedin.com/company/tensorbuilds/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/tensor_builds/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        Instagram
                    </a>
                </div>
                <p>Contact no :+91 9552510715 / 91726 35200</p>
            </div>
        </footer>
    );
}
