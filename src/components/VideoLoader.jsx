// // import React from 'react';

// // const MyVideoLoader = () => (
// //   <div>
// //     <video src={require('../../public/static/images/landingLoaderVideo.mp4')}/>
// //   </div>
// // );

// // export default MyVideoLoader;
// import React, { useEffect, useState } from 'react';
// import "../app/page.module.css"
// const VideoLoader = () => {
//   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Simulate loading delay (remove this in production)
// //     const timeout = setTimeout(() => {
// //       setLoading(false);
// //     }, 3000); // Change this duration to match your actual video loading time

// //     return () => clearTimeout(timeout);
// //   }, []);

//   return (
//     <div className={`video-loader ${loading ? 'loading' : 'loaded'}`}>
//       {/* {!loading ? (
//         <div className="loader-spinner">
//           <p>Loading...</p>
//         </div>
//       ) : ( */}
//         <video
//           src={require('../../public/static/images/landingLoaderVideo.mp4')} // Update with the correct path
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           width="100%"
//         />
//       {/* )} */}
//     </div>
//   );
// };

// export default VideoLoader;
