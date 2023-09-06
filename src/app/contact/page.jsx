import React from 'react'
import styles from "./page.module.css";
import ImageWrapper from "../../../public/static/images/BookContact.png"
import Image from 'next/image';
const page = () => {
  return (
    <>
    <div className={styles.pageWrapper}>
        <div className={styles.heading}>CONTACT US</div>
        <div className={styles.mainSection}>
            <div className={styles.department}>
            <p>Registration, Events & Approval Queries</p>
            <p>Registration, Events & Approval Queries</p>
            <p>Registration, Events & Approval Queries</p>
            <p>Registration, Events & Approval Queries</p>
            <p>Registration, Events & Approval Queries</p>
            <p>Registration, Events & Approval Queries</p>
            <p>Registration, Events & Approval Queries</p>
            <p>Registration, Events & Approval Queries</p>
            </div>
            <div className={styles.imgWrapper}>
                <Image
                src={ImageWrapper}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default page