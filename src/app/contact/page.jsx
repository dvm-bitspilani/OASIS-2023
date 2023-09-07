"use client"
<<<<<<< Updated upstream
import React, {useState} from 'react'
import styles from "./page.module.css";
import ImageWrapper from "../../../public/static/images/BookContact.png"
// import ImageWrapper1 from "../../../public/static/images/navLogo.png"
// import ImageWrapper2 from "../../../public/static/images/hamBG.png"
// import ImageWrapper3 from "../../../public/static/images/Group3.png"
// import ImageWrapper4 from "../../../public/static/images/Group2.png"
// import ImageWrapper5 from "../../../public/static/images/Group1.png"
// import ImageWrapper6 from "../../../public/static/images/LandingPageBook.png"
// import ImageWrapper7 from "../../../public/static/images/Library.png"
import Image from 'next/image';
const Page = () => {
    const [imageSrc, setImageSrc] = useState(ImageWrapper);
=======
// import React, {useState} from 'react'
// import styles from "./page.module.css";
// import ImageWrapper from "../../../public/static/images/BookContact.png"
// import Image from 'next/image';
// import ContactProfile from '@/components/ContactProfile';
// const page = () => {
//     const [imageSrc, setImageSrc] = useState(ImageWrapper);
//     const [hoveredProfile, setHoveredProfile] = useState(null);
//   const handleMouseOver = (image, profile) => {
//     setImageSrc(image);
//     setHoveredProfile(profile);
//   };
//   const profiles = [
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//     { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
//   ];
//   return (
//     <>
//     <div className={styles.pageWrapper}>
//         <div className={styles.heading}>CONTACT US</div>
//         <div className={styles.mainSection}>
//             <div className={styles.department}>
//             {/* <p>Registration, Events & Approval Queries</p> */}
//             {/* <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
//             <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
//             <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
//             <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
//             <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
//             <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
//             <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p>
//             <p onMouseOver={() => handleMouseOver(ImageWrapper)}>Registration, Events & Approval Queries</p> */}
//             {profiles.map((profile, index) => (
//               <p
//                 key={index}
//                 onMouseOver={() => handleMouseOver(ImageWrapper, profile)}
//                 onMouseOut={() => setHoveredProfile(null)}
//               >
//                 {profile.dept}
//               </p>
//             ))}
//             </div>
//             <div className={styles.imgWrapper}>
//                 <ContactProfile
//               imageSrc={imageSrc}
//               name={hoveredProfile ? hoveredProfile.name : ''}
//               dept={hoveredProfile ? hoveredProfile.dept : ''}/>
//                 </div>
//         </div>
//     </div>
//     </>
//   )
// }
>>>>>>> Stashed changes

// export default page

import React, { useState } from 'react';
import styles from './page.module.css';
import ImageWrapper from '../../../public/static/images/BookContact.png';
import Image from 'next/image';
import ContactProfile from '@/components/ContactProfile';

const Page = () => {
  const [imageSrc, setImageSrc] = useState(ImageWrapper);
  const [hoveredProfile, setHoveredProfile] = useState(null);

  const handleMouseOver = (image, profile) => {
    setImageSrc(image);
    setHoveredProfile(profile);
  };

  const profiles = [
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },
    { name: 'Shivang Rai', dept: 'Registration, Events & Approval Queries' },

    // Add more profiles here
  ];

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.heading}>CONTACT US</div>
        <div className={styles.mainSection}>
          <div className={styles.department}>
            {profiles.map((profile, index) => (
              <p
                key={index}
                onMouseOver={() => handleMouseOver(ImageWrapper, profile)}
                onMouseOut={() => setHoveredProfile(null)}
              >
                {profile.dept}
              </p>
            ))}
          </div>
          <div className={styles.imgWrapper}>
            <ContactProfile
              imageSrc={imageSrc}
              name={hoveredProfile ? hoveredProfile.name : ''}
              dept={hoveredProfile ? hoveredProfile.dept : ''}
            />
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< Updated upstream
export default Page;
=======
export default Page;
>>>>>>> Stashed changes
