// // import React from "react";
// // import * as styles from "./dev.module.css";
// // import insta from "./Dev Assets/Instagram.png"
// // import linkedIn from "./Dev Assets/linkedin.png"
// // import github from "./Dev Assets/github.png"
// // import behance from "./Dev Assets/behance.png"
// // import Ritik from "./Dev Assets/ritik.png"
// // import book from "./Dev Assets/book.png"
// // import Image from "next/image";
// // const DevTeam = ({ team }) => {
// //   return (
// //     <div className={styles.teamWrapper}>
// //         <Image src={book} alt="book"/>
// //       {team.map((member) => (
// //         <div key={member.id} className={styles.memberCard}>
// //           <Image src={Ritik} alt={member.name} className={styles.memberImage} />
// //           <h2>{member.name}</h2>
// //           {/* <p>{member.desc}</p> */}
// //           <div className={styles.socialLinks}>
// //             {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><Image src={linkedIn}/></a>}
// //             {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><Image src={github}/></a>}
// //             {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><Image src={insta}/></a>}
// //             {member.behance && <a href={member.behance} target="_blank" rel="noopener noreferrer"><Image src={behance}/></a>}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default DevTeam;
// import React from "react";
// import * as styles from "./dev.module.css";
// import insta from "./Dev Assets/Instagram.png";
// import linkedIn from "./Dev Assets/linkedin.png";
// import github from "./Dev Assets/github.png";
// import behance from "./Dev Assets/behance.png";
// // import shreyas from "./Dev Assets/himanshu.jpeg";
// import book from "./Dev Assets/book.png";
// import cross from "./Dev Assets/eventsModalCloseButton.png"
// import Image from "next/image";
// const DevTeam = ({ team, onClose}) => {
//   const renderMembers = (start, end) => {
//     return team.slice(start, end).map((member) => (
//       <div key={member.id} className={styles.memberCard}>
//         <Image src={member.image} alt={member.name} className={styles.memberImage} />
//         <h2>{member.name}</h2>
//         <div className={styles.socialLinks}>
//           {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><Image src={linkedIn}/></a>}
//           {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><Image src={github}/></a>}
//           {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><Image src={insta}/></a>}
//           {member.behance && <a href={member.behance} target="_blank" rel="noopener noreferrer"><Image src={behance}/></a>}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <>
//     <div className={styles.teamWrapper}>
//       <div className={styles.leftDiv}>
//         <div className={styles.leftFirstRow}>
//           {renderMembers(0, Math.min(2, team.length))}
//         </div>
//         <div className={styles.leftSecondRow}>
//           {renderMembers(2, Math.min(4, team.length))}
//         </div>
//       </div>
//       <div className={styles.rightDiv}>
//         <div className={styles.rightFirstRow}>
//           {renderMembers(4, Math.min(6, team.length))}
//         </div>
//         <div className={styles.rightSecondRow}>
//           {renderMembers(6, Math.min(8, team.length))}
//         </div>
//       </div>
//       <Image src={book} alt="book" className={styles.book}/>
//       <Image src={cross} alt="close team" className={styles.blackCross} onClick={onClose}/>
//     </div>
//     <div className={styles.mobileTeamWrapper}>

//     </div>
//     </>
//   );
// };

// export default DevTeam;

import React from "react";
import * as styles from "./dev.module.css";
import insta from "./Dev Assets/Instagram.png";
import linkedIn from "./Dev Assets/linkedin.png";
import github from "./Dev Assets/github.png";
import behance from "./Dev Assets/behance.png";
import book from "./Dev Assets/book.png";
import cross from "./Dev Assets/eventsModalCloseButton.png";
import backgroundImage from "./Dev Assets/cardBgImage.png"
import {motion} from "framer-motion";
import Image from "next/image";

const DevTeam = ({ team, onClose }) => {
  const isMobile = window.innerWidth <= 800;

  const renderDesktopMembers = (start, end) => {
    return team.slice(start, end).map((member) => (
      <div key={member.id} className={styles.memberCard}>
        <Image src={member.image} alt={member.name} className={styles.memberImage} />
        <h2>{member.name}</h2>
        <div className={styles.socialLinks}>
          {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><Image src={linkedIn}/></a>}
          {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><Image src={github}/></a>}
          {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><Image src={insta}/></a>}
          {member.behance && <a href={member.behance} target="_blank" rel="noopener noreferrer"><Image src={behance}/></a>}
        </div>
      </div>
    ));
  };

  const renderMobileMembers = () => {
    return team.map((member) => (
      <div key={member.id} className={styles.mobileMemberCard} style={{backgroundImage:`url(${backgroundImage.src})`}}>
        <div className={styles.mobileCardContent}><Image src={member.image} alt={member.name} className={styles.memberImage} />
      <div className={styles.memberInfo}>  <h2>{member.name}</h2>
        <div className={styles.socialLinks}>
          {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><Image src={linkedIn}/></a>}
          {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><Image src={github}/></a>}
          {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><Image src={insta}/></a>}
          {member.behance && <a href={member.behance} target="_blank" rel="noopener noreferrer"><Image src={behance}/></a>}
          </div>
        </div>
        </div>
        {/* <Image src={backgroundImage} alt="bgImage" className={styles.cardBgImage}/> */}
      </div>
    ));
  };

  return (
    <>
      <motion.div className={styles.teamWrapper}
      initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        
        transition={{ duration: 1}}>

        {isMobile ? (
          renderMobileMembers()
        ) : (
          <>
            <div className={styles.leftDiv}>
              <div className={styles.leftFirstRow}>{renderDesktopMembers(0, Math.min(2, team.length))}</div>
              <div className={styles.leftSecondRow}>{renderDesktopMembers(2, Math.min(4, team.length))}</div>
            </div>
            <div className={styles.rightDiv}>
              <div className={styles.rightFirstRow}>{renderDesktopMembers(4, Math.min(6, team.length))}</div>
              <div className={styles.rightSecondRow}>{renderDesktopMembers(6, Math.min(8, team.length))}</div>
            </div>
          </>
        )}
       {!isMobile&&<Image src={book} alt="book" className={styles.book}/>} 
       {!isMobile && <Image src={cross} alt="close team" className={styles.blackCross} onClick={onClose}/>} 
       {/* {isMobile && <Image src={backgroundImage} alt="bgImage" className={styles.cardBgImage}/>} */}
      </motion.div>
    </>
  );
};

export default DevTeam;
