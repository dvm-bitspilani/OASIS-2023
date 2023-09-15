import React from "react";
import { useEffect } from "react";
import * as events from "../components/eventsmobile.module.css"
import Image from "next/image";
import Map from "../../public/static/images/EventsMapMobile.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "rooks";
import StreetDance from "../../public/static/images/StreetDance.png";
import EventItemMobile from "./EventItemMobile";
import backBtnMobile from "../../public/static/images/backBtnMobile.svg"
gsap.registerPlugin(ScrollTrigger);


export default function EventsMobile() {

    const tasks = [
        {
            key: 1,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "250px",
            left: "40%",
        },
        {
            key: 2,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "450px",
            left: "67%",
        },
        {
            key: 3,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "650px",
            left: "38%",
        },
        {
            key: 4,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "850px",
            left: "65%",
        },
        {
            key: 5,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "1050px",
            left: "43%",
        },
        {
            key: 6,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "1250px",
            left: "70%",
        },
        {
            key: 7,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "1450px",
            left: "32%",
        },
        {
            key: 8,
            name: "STREET DANCE",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
            image: StreetDance,
            top: "1670px",
            left: "70%",
        },
        // {
        //     key: 9,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "45%",
        //     left: "50%",
        // },
        // {
        //     key: 10,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "67%",
        //     left: "50%",
        // },
        // {
        //     key: 11,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "35%",
        //     left: "50%",
        // },
        // {
        //     key: 12,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "10%",
        //     left: "50%",
        // },
        // {
        //     key: 13,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "20%",
        //     left: "50%",
        // },
        // {
        //     key: 14,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "12%",
        //     left: "50%",
        // },
        // {
        //     key: 15,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "30%",
        //     left: "50%",
        // },
        // {
        //     key: 16,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "40%",
        //     left: "50%",
        // },
        // {
        //     key: 17,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "55%",
        //     left: "50%",
        // },
        // {
        //     key: 18,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "60%",
        //     left: "50%",
        // },
        // {
        //     key: 19,
        //     name: "STREET DANCE",
        //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eveniet voluptas, ullam saepe laboriosam quas consequuntur! Itaque consequuntur, fugiat labore, sit rem dolore harum eligendi alias, cumque at tenetur nulla.",
        //     image: StreetDance,
        //     top: "75%",
        //     left: "50%",
        // },
    ];


    const { innerWidth, innerHeight } = useWindowSize();

    useEffect(() => {
        // Set initial states
        gsap.set("#scrollDistMobile", { width: "100%", height: "100%" });
        gsap.set("#containerMobile", {
            position: "fixed",
            // width: 595,
            // height: 1971,
            transformOrigin: "0.5 0.5",
            top: 0,
        });
        gsap.to("#containerMobile", {
            duration: 1,
            opacity: 1,
            ease: "power2.inOut",
            delay: 0.3,
        });

        // Tween the SVG path + circle
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#scrollDistMobile",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                },
            })
            .to("#cm", { motionPath: "#pm", immediateRender: true, ease: "none" }, 0)
        // .from("#p", { drawSVG: "0 0", ease: "none" }, 0);

        // Move container's x/y to follow the red circle
        gsap.ticker.add(() =>
            gsap.to("#containerMobile", {
                duration: 2.5,
                x: -gsap.getProperty("#cm", "x"),
                y: -gsap.getProperty("#cm", "y"),
            })
        );

        // Center the container's left/top position
        const resizeHandler = () => {
            gsap.set("#containerMobile", {
                left: 0,
                top: 0,
            });
        };

        window.addEventListener("load", resizeHandler);
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("load", resizeHandler);
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);


    return (
        <>

            <div className={events.wrapper}>
                <div id="scrollDistMobile" className={events.scrollDistMobile}></div>
                {/* <div className={events.backBtn}>
                        <h1>EVENTS</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="30" viewBox="0 0 46 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03327 7.02125C6.17614 6.79289 6.41796 6.59774 6.72817 6.46046C7.03838 6.32318 7.40305 6.24994 7.77606 6.25H26.6374C28.3712 6.25 30.0881 6.47633 31.6899 6.91605C33.2918 7.35578 34.7473 8.0003 35.9733 8.81282C37.1993 9.62533 38.1718 10.5899 38.8353 11.6515C39.4988 12.7131 39.8403 13.8509 39.8403 15C39.8403 16.1491 39.4988 17.2869 38.8353 18.3485C38.1718 19.4101 37.1993 20.3747 35.9733 21.1872C34.7473 21.9997 33.2918 22.6442 31.6899 23.0839C30.0881 23.5237 28.3712 23.75 26.6374 23.75H9.66219C9.16196 23.75 8.68221 23.6183 8.3285 23.3839C7.97478 23.1495 7.77606 22.8315 7.77606 22.5C7.77606 22.1685 7.97478 21.8505 8.3285 21.6161C8.68221 21.3817 9.16196 21.25 9.66219 21.25H26.6374C29.1386 21.25 31.5373 20.5915 33.3059 19.4194C35.0745 18.2473 36.068 16.6576 36.068 15C36.068 13.3424 35.0745 11.7527 33.3059 10.5806C31.5373 9.40848 29.1386 8.75 26.6374 8.75H12.3292L15.711 10.9913C16.0546 11.227 16.2447 11.5428 16.2404 11.8705C16.2361 12.1982 16.0377 12.5118 15.688 12.7435C15.3383 12.9753 14.8653 13.1067 14.3707 13.1096C13.8762 13.1124 13.3998 12.9864 13.044 12.7587L6.44256 8.38375C6.17863 8.20894 5.99887 7.98618 5.92601 7.74365C5.85316 7.50112 5.89048 7.24972 6.03327 7.02125Z" fill="white" />
                        </svg>
                </div> */}
                <div id="containerMobile" className={events.container}>
                    <Image
                        src={Map}
                        width={1000}
                        height={2600}
                        draggable={false}
                        alt=""
                        style={{ position: "absolute" }}
                        className={events.bgImage}
                    />
                    {/* <svg
                        width="2359"
                        height="1173"
                        viewBox="0 0 2359 1173"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ position: "absolute" }}
                    >
                        <circle id="c" r="10" fill="#f00" />
                        <path
                            id="p"
                            d="M9.5 32.9988C47.8333 436.832 222.9 1180.4 488.5 1162C820.5 1139 678 -179.001 991 32.9988C1304 244.999 1019 1111.5 1396.5 1162C1774 1212.5 1789.5 32.9989 2110.5 32.9988C2460.5 32.9987 2332 429.499 2299.5 535.5C2256.75 674.927 2245.5 796.5 2198 1162"
                            stroke="#FF0000"
                            strokeWidth="5"
                            fill="none"
                        />
                    </svg> */}
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 1639" fill="none">
                        <g filter="url(#filter0_d_1343_470)">
                            <circle id="cm" r="10" fill="#f00" />
                            <path id="pm" d="M56.5 8C56.5 8 208.829 115.632 207.5 216C206.1 321.769 34.1179 318.222 34 424C33.8893 523.31 181.229 528.33 186.5 627.5C191.505 721.664 70 794 70 839C70 873.5 222 981.5 224 1033.5C226 1085.5 4.0009 1115.5 4 1223.5C3.99949 1285 232.339 1305.58 231.5 1424C230.692 1538.12 17.5 1623 17.5 1623" stroke="url(#paint0_linear_1343_470)" stroke-width="4" stroke-linecap="round" stroke-dasharray="12 12" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1343_470" x="0" y="-0.000244141" width="251.502" height="1639" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="8" dy="4" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1343_470" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1343_470" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_1343_470" x1="12.5965" y1="165.144" x2="280.025" y2="195.546" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0121923" stop-color="#51B6FF" />
                                <stop offset="0.199266" stop-color="#E8F5FF" />
                                <stop offset="0.382301" stop-color="#4CB4FF" />
                                <stop offset="0.573397" stop-color="#B4E0FF" />
                                <stop offset="0.75482" stop-color="#51B6FF" />
                                <stop offset="0.920297" stop-color="#BEE4FF" />
                            </linearGradient>
                        </defs>
                    </svg>


                    <div className={events.itemWrapper}>
                        {tasks.map((evt) => {
                            return (
                                <EventItemMobile key={evt.key} name={evt.name} desc={evt.desc} image={evt.image} top={evt.top} left={evt.left} />
                            );
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}