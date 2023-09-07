
"use client"
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

export default Page;
