"use client"

import React from "react";
import * as styles from "./gallery.module.css"
import { useState, useRef, useLayoutEffect } from 'react';
import gallery from "../../../public/static/images/gallery.jpg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


export default function Gallery() {

    const divRef = useRef();
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const div = divRef.current;
        if (div) {
            setWidth(div.offsetWidth);
        }
    }, [divRef]);

    console.log(width)

    let cols = 5
    let gap = 32
    let boxWidth = width / cols - gap / 2

    const Box = () => {
        return (
            <div className={styles.imageBox}
                style={{ backgroundImage: gallery, width: boxWidth }}>
            </div>
        )
    }

    return (
        <>
            <div className={styles.page}>
                <div className={styles.heading}>
                    <div className={styles.text}>GALLERY</div>
                    <svg className={styles.cross} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M31 3L3 31M3 3L31 31" stroke="#5DB3F1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className={styles.container}>
                    <div className={styles.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="41" viewBox="0 0 24 41" fill="none">
                            <path d="M20.3203 2.99997L3.00098 20.3193L20.3203 37.6387" stroke="#5DB3F1" stroke-width="5.77312" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.main} ref={divRef}>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            <div>Item 1</div>
                            <div>Item 2</div>
                            <div>Item 3</div>
                            <div>Item 4</div>
                        </Carousel>;
                    </div>
                    <div className={styles.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="41" viewBox="0 0 24 41" fill="none">
                            <path d="M2.99998 37.6387L20.3193 20.3193L2.99998 3" stroke="#5DB3F1" stroke-width="5.77312" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

