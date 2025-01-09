"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "../page.module.css";
import Spline from "@splinetool/react-spline";

export default function SplineEmbed({ sceneUrl, className }: { sceneUrl: string; className: string }) {
    return <Spline className={className} scene={sceneUrl} />;
}
