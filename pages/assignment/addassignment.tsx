import Link from 'next/link'
import React from 'react'
import styles from '../assignment/Assignment.module.css'



function addassignment() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.leftBar}>
            <div className={styles.imageContainer}>
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="profile" className={styles.profileImage}/>
            </div>
            <div className={styles.textContainer}>
                <h3> Vithushan Logan </h3>
                <h3> Grade 11A </h3>
            </div>
            <div className={styles.selectOptionsCotainer}>
    
                <ul className={styles.selectOptionsContent}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                </ul>

                <ul className={styles.selectOptionsContent}>
                <Link href="/">
                    <a>Staff Details</a>
                </Link>
                </ul>

                <ul className={styles.selectOptionsContent}>
                <Link href="/">
                    <a>Classes</a>
                </Link>
                </ul>

                <ul className={styles.selectOptionsContent}>
                <Link href="/">
                    <a>Chat Box</a>
                </Link>
                </ul>

                <ul className={styles.selectOptionsContent}>
                <Link href="/">
                    <a>Updated News</a>
                </Link>
                </ul>
                

            </div>
        </div>
    </div>
  )
}

export default addassignment