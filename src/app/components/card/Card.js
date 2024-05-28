import React from 'react';
import styles from  "./card.module.css";
import Image from "next/image";
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>

 <Image src="/laptop.avif" alt="" height={380} width={700} className={styles.image}/></div>  {/*className={styles.image} */}
<div className={styles.textContainer}>
<div className={styles.detail}>
  <span className={styles.category}>CULTURE</span>
</div>
<Link href="/">
<h1>Title of page Lorem ipsum sit here were qwerty uiopli!</h1>
</Link>

<p className={styles.desc}>The thesis whisperer is a newspaper-style blog dedicated to helping Ph.D. students finish their thesis or dissertation. It provides a helpful review section for PhD-themed books and the opportunity to writing and presenting your work. It is managed and edited by Associate Professor Inger Mewburn, Director of Research Training at the Australian National University. This web page publishes a new post on the last Wednesday of every month.</p>
<Link href="/" className={styles.link}>Read More</Link>
 </div>
    
    </div>
  )
}

export default Card;
