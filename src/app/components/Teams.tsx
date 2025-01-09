"use client";
import styles from "../page.module.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

/* `You can send us requests for deploying and running 5 lightweight applications( any app from our list
            or your own websites, web apps, or custom requests), and your own personal URL for each of those.`,
                `Contact us for any changes to be made in your app( if you want full automation).`,
                `Our alternative platform to Vercel stack for hosting web applications.`,  */

export default function Teams() {
    const SubscriptionPlan = [
        {
            id: 1,
            heading: `Rohan Marar`,
            cost: 'Founder',
            perks: [`Committed to transforming my innovative ideas into services and products that improve lives.`, 'Founded the startup in August 2024, actively seeking ways to drive the business forward.',
                `Dedicated to creating AI tools that empower others through technology`,'Focused on identifying opportunities for business growth.'
            ],
            image : '/rohan.jpg',
        },
        {
            id: 2,
            heading: `Prathmesh Gawali`,
            cost: 'Co-Founder',
            perks: [`Assist with key business decisions, web application development, and project building.`, 'Joined the startup in November 2024 after the launch of WealthifyAI, contributing to its growth.',
                `Manage intern hiring, Exploring strategies to expand and scale the business. and co-create our innovative TOTB venture.`
            ],
            image : '/prathmesh.jpg',},
            {
                id: 3,
                heading: `Shravan Chandrachud`,
                cost: 'Executive partner',
                perks: [`Develop full-stack web applications to power products and services.`, 'Contribute to idea brainstorming, coding, and product development.',
                    `Bring technical expertise and innovation to TensorBuilds.`
                ],
                image : '/shravan.jpg',},
            
    ];

    return (
        <>
            <h2 className={styles.heading}>Our Team </h2>
        <div className={styles.compare}>
            {/* <div className={styles.elements}>
                <div className={styles.content}>
                    <h2>What do you get?</h2>
                    <p>199/- per month subscription plan</p>
                    <ol>
                        <li>
                            You can send us requests for deploying and running 5 lightweight applications( any app from our list,
                            or your own websites, web apps, or custom requests), and your own personal URL for each of those.
                        </li>
                        <li>Contact us for any changes to be made in your app( if you want full automation).</li>
                        <li>Our alternative platform to Vercel stack for hosting web applications.</li>
                    </ol>
                </div>
                <img src="/sphere.png" alt="Globe" className={styles.image} />
            </div>*/}
            {SubscriptionPlan.map((plan) => (
                <div key={plan.id} className={styles.packcontainer}>
                    <div className={styles.packheader}>
                        
                        <div className={styles.packpricecontainer}>
                        <img
                                src={plan.image}
                                alt={`${plan.heading} Image`}
                                className={styles.packimage} // Add a CSS class for styling the image
                            />
                            {plan.heading}

                        </div>
                        <p className={styles.packtitle}>
                            {plan.cost}
                        </p>
                    </div>
                    <div>
                        <ul className={styles.packlists}>
                            {plan.perks.map((perk, index) => (
                                <li key={index} className={styles.packlist}>
                                    <p>
                                        {perk}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div >
        </>
    );
}