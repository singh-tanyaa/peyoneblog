// Herosection.js

import React from 'react';
import Link from 'next/link';
import styles from "@/app/styles/common.module.css"; // Import general styles
import heroStyles from "@/app/styles/herosection.module.css" // Import hero styles
import Image from 'next/image';
import CategoryList from './CategoryList';
import CardList from './CardList';


const Herosection = ({ title, imageUrl }) => {
    return (
        <div>
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p>From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.</p>
                        <Link href="/blog">
                            <button className={heroStyles.blogbtn}>
                                Explore Blogs
                            </button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="watching blogging" width={1000} height={600} />
                    </div>
                </div>
            </div>
        </main>
        {/* <CategoryList/>
        <CardList/> */}
        </div>
    );
};

export default Herosection;
