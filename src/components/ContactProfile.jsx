import React from 'react'
import styles from '../app/contact/page.module.css'
import callIcon from "../../public/static/images/call.png"
import mailIcon from "../../public/static/images/mail.png"
import Image from 'next/image'
import shivang from "../../public/static/images/shivang.png"

const ContactProfile = (props) => {
  // const { hoveredProfile } = props;
  return (
    <>
                {/* <div
                  className={styles['details']}
                > */}
                  <Image src={props.image} alt=""  width={274} height={338}/>
                  <h1>{props.name}</h1>
                  <h2>{props.dept}</h2>
                  <div className={styles['iconsContainer']}>
                    <Image src={callIcon} alt="" />
                    <Image src={mailIcon} alt="" />
                  </div>
                {/* </div> */}
    </>
  )
}

export default ContactProfile