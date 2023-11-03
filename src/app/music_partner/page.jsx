"use client"

import React , {useState} from "react"
import * as styles from "./page.module.css"
import Loader from "@/helpers/Loader"
import CustomCursor from "@/components/CustomCursor"

export default function Page(){
    const [isLoading , setIsLoading]=useState(true) 
    console.log(isLoading)

    return(
        <>
            <CustomCursor />
            {/* <Loader isLoading={isLoading} setIsLoading={setIsLoading} /> */}
            <div className={styles.wrapper}>
                <div className={styles.bg}></div>
                <h1 className={styles.h1}>Horus Music</h1>
                <h2 className={styles.h2}>Official music partner for Oasis 2023</h2>

                <h3 className={styles.h3}>Introducing 2023 Partner Horus Music</h3>
                <p className={styles.p}>Introducing global music distribution and label services company Horus Music, the official partner for Oasis 2023. . Headquartered in the UK, the company has almost two decades of experience in the music business.Having opened the doors of their Indian office in 2016, Horus Music have since worked with artists such as Samar Mehdi, Tarun Balani, Motherjane, Aseem, Aditi Ramesh, and Shashaa Tirupati. With a passion for supporting and developing independent artists, Horus Music makes it their mission to invest in hidden,emerging talents and have aided the rise of artists such as Frizzell D’souza through their dedication and commitment to nurturing artists and their careers.</p>

                <h3 className={styles.h3}>What services do Horus Music offer?</h3>
                <p className={styles.p}>Horus Music delivers your music to over 100 digital platforms around the world including Spotify, Apple Music, Amazon, Wynk, Gaana, JioSaavn and much more. Dedicated to supporting independent artists and labels with a superior customer support service, Horus Music offers a range of distribution and marketing services to help elevate artists careers, ensuring all artists on their subscription and pay per release models retain 100% of their rights. </p>
                <p className={styles.p}>Horus Music also houses an expert team who are on hand to assist artists with planning their release strategy, alongside presenting a range of bespoke marketing services such as creating press releases, electronic press kits, running, YouTube Ad campaigns, PR campaigns, Radio plugging and Influencer marketing options. </p>

                <h3 className={styles.h3}>What to expect from Horus Music at Oasis 2023</h3>
                <p className={styles.p}>The winners of Rocktaves and Scontro 2023 will gain direct access to Horus Music’s Artist and Label Services.. This model  operates on a no upfront payment service and is exclusively offered to hand selected artists and labels. In addition to distribution, the winners&apos; music will not only be marketed in India, but will also be pitched in global territories through Horus Music’s direct partnerships with major digital platforms.</p>
                <p className={styles.p}>The runners up for Rocktave and Scontro will receive a professionally crafted digital press one sheet, tailored specifically to the artist and their brand to enable them to pitch their music to industry experts.  Alongside this, the runners up will be offered an exclusive discount on Horus Music’s brand new ‘Unlimited Distribution PRO’ plan. Not publicly available until November, the runners up will benefit from exclusive first access which includes distribution and playlist pitching to a variety of Indian platforms such as Wynk, Gaana, Damroo and more. </p>
                <p className={styles.p}>Horus Music is also giving students who are not taking part in the competitions but want to get their music distributed,  a special student discount for their  subscription  plan. To claim yours, make sure to visit the Horus Music standee to discuss your needs directly with the team.</p>

                <h4 className={styles.h4}>To learn more about Horus Music and their services, head over to their website at <span><a href="www.horusmusic.global">www.horusmusic.global</a></span> or hit follow on <span><a href="https://www.instagram.com/horusmusic/">Instagram</a></span> to stay up to date with all the latest news.</h4>
            </div>
        </>
    )

}