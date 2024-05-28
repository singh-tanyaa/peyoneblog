import React from "react";
import styles from "@/app/styles/cardList.module.css";
import Image from "next/image";
import Card from "./card/Card";
import Pagination from "./Pagination/Pagination";

const CardList = ()=>{
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>Recent/Latest Posts</h1>
        <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>


        </div>
        <Pagination/>
         </div>
        
        
    )
}
export default CardList;