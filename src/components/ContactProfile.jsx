import React from "react"
import styles from "./Contact.module.css"
import callIcon from "../../public/static/images/compressed_phone.svg"
import mailIcon from "../../public/static/images/compressed_mail.svg"
import Image from "next/image"

const ContactProfile = (props) => {
  console.log(props)

  return (
    <>
      <Image
        draggable={false}
        src={props.image}
        alt=""
        width={274}
        height={338}
      />
      <h1>{props.name}</h1>
      <h2>{props.dept}</h2>
      <div className={styles["iconsContainer"]}>
        <a href={props.mail}>
          <Image draggable={false} src={mailIcon} alt="" />
        </a>
        {props.phone && <a href={props.phone}>
          <Image draggable={false} src={callIcon} alt="" />
        </a>}
      </div>
      {/* </div> */}
    </>
  )
}

export default ContactProfile
