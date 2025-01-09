/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import styles from "../page.module.css";
import { IoMoonOutline } from "react-icons/io5";
import Opportunities from "./Opportunities";
import Link from "next/link";
export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container mx-auto flex justify-center items-center flex-wrap">
                <img src="/tensorbuilds.png" alt="Logo" className={styles.logo} />

            </div>
            <nav className={styles.navbar}>
                <a href="/">Home</a>
                <a href="https://infraedge.vercel.app/">InfraEdge</a>
                <a href="https://wa.me/qr/LUDMYTACVQGHC1">Contact</a>
            </nav>
            <button><IoMoonOutline className={styles.mode}/></button>
        </header>
    );
}
