import React from 'react'
import styles from '../app/contact/page.module.css'
import callIcon from "../../public/static/images/call.png"
import mailIcon from "../../public/static/images/mail.png"
import Image from 'next/image'
const ContactProfile = (props) => {
  return (
    <>
    {/* <div className={styles.contactWrapper}> */}
    <Image src={props.imageSrc}/>
    <span className={styles.imgName}>{props.name}</span>
    <span className={styles.imgDept}>{props.dept}</span>
    <div className={styles.icons}>
    <span><Image src={callIcon} className={styles.callIcon}/></span>
    <span><Image src={mailIcon} className={styles.mailIcon}/></span>
    </div>
    {/* </div> */}
    </>
  )
}

export default ContactProfile