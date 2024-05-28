import React from "react";
import Herosection from "../components/Herosection";

import styles from "./blogPage.module.css";
import CardList from "../components/CardList";

const Blog=()=>{
    return(
        <div>
            
            <Herosection title={"Read Blogs u  want!"} imageUrl={"/sceblog.avif"}/>
            
            <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}>
            <CardList/>
             </div>
             </div>

        </div>
           
            
        
    )
}
export default Blog;