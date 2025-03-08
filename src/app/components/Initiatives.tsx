"use client";
import styles from "../page.module.css";

export default function Products() {
    return (
        <div className={styles.elements}>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                Think Outside the Box
                </h2>
                
                <div className={styles.gridContainer}>
                    <div className={styles.Item}>
                        <img src="NewImage.png" className={styles.largeImage} alt="New Image"/>
                        <p className={styles.Type}>Our initiative</p>
                        <p className={styles.ProductName}>Content creation</p>
                        <p className={styles.Description}>TOTB is our content-led growth engine to promote BulkBites and allow us to share our technical journey with everyone. It lets our creative juices flow!</p>
                        <a className={styles.Status} href='https://youtube.com/@tensorbuilds?si=ytvcnRmFjcMXDAOi/'>Watch us on Youtube</a>
                        <a className={styles.Status} href='https://tensorbuilds.substack.com/'>Subscribe to our monthly newsletter</a>
                        <a className={styles.Status} href='https://www.instagram.com/tensor_builds/'>Follow us on Insta</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
