// // import React from "react";
// // import Navbar from "../Navbar/Navbar";
// // import { albumsData, songsData } from "../../assets/assets";
// // import Albumitem from "../Albumitem/Albumitem";
// // import Songitem from "../Songitem/Songitem";
// // const DisplayHome = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="mb-4">
// //         <h1 className="my-5 font-bold text-2xl rounded">Featured Charts</h1>
// //         <div className="flex overflow-auto">
// //           {albumsData.map((item, index) => (
// //             <Albumitem
// //               key={index}
// //               name={item.name}
// //               image={item.image}
// //               desc={item.desc}
// //               id={item.id}
// //             />
// //           ))}
// //         </div>
// //         <h1 className="my-3 font-bold text-2xl rounded">
// //           Today's biggest hits
// //         </h1>
// //         <div className="flex overflow-auto">
// //           {songsData.map((item, index) => (
// //             <Songitem
// //               key={index}
// //               name={item.name}
// //               image={item.image}
// //               desc={item.desc}
// //               id={item.id}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default DisplayHome;
// import React, { useRef, useEffect } from "react";
// import Navbar from "../Navbar/Navbar";
// import { albumsData, songsData } from "../../assets/assets";
// import Albumitem from "../Albumitem/Albumitem";
// import Songitem from "../Songitem/Songitem";

// const DisplayHome = () => {
//   const albumsRef = useRef(null);
//   const songsRef = useRef(null);

//   useEffect(() => {
//     const SCROLL_SPEED = 0.5;

//     const handleAlbumsScroll = (e) => {
//       e.preventDefault();
//       albumsRef.current.scrollBy({
//         left: e.deltaY * SCROLL_SPEED,
//         behavior: "auto",
//       });
//     };

//     const handleSongsScroll = (e) => {
//       e.preventDefault();
//       songsRef.current.scrollBy({
//         left: e.deltaY * SCROLL_SPEED,
//         behavior: "auto",
//       });
//     };

//     const albumsEl = albumsRef.current;
//     const songsEl = songsRef.current;

//     albumsEl.addEventListener("wheel", handleAlbumsScroll, { passive: false });
//     songsEl.addEventListener("wheel", handleSongsScroll, { passive: false });

//     return () => {
//       albumsEl.removeEventListener("wheel", handleAlbumsScroll);
//       songsEl.removeEventListener("wheel", handleSongsScroll);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl rounded">Featured Charts</h1>
//         <div
//           className="flex overflow-x-auto hide-scrollbar scroll"
//           ref={albumsRef}
//         >
//           {albumsData.map((item, index) => (
//             <Albumitem
//               key={index}
//               name={item.name}
//               image={item.image}
//               desc={item.desc}
//               id={item.id}
//             />
//           ))}
//         </div>

//         <h1 className="my-3 font-bold text-2xl rounded">
//           Today's biggest hits
//         </h1>
//         <div
//           className="flex overflow-x-auto hide-scrollbar scroll"
//           ref={songsRef}
//         >
//           {songsData.map((item, index) => (
//             <Songitem
//               key={index}
//               name={item.name}
//               image={item.image}
//               desc={item.desc}
//               id={item.id}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DisplayHome;
import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { albumsData, songsData } from "../../assets/assets";
import Albumitem from "../Albumitem/Albumitem";
import Songitem from "../Songitem/Songitem";

const DisplayHome = () => {
  const albumsRef = useRef(null);
  const songsRef = useRef(null);

  const SCROLL_SPEED = 0.7;

  const handleWheel = (ref) => (e) => {
    e.preventDefault();
    if (ref.current) {
      // عكس اتجاه التمرير ليتناسب مع حركة عجلة الماوس
      ref.current.scrollLeft -= e.deltaY * SCROLL_SPEED;
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl rounded">Featured Charts</h1>
        <div
          className="scroll flex hide-scrollbar"
          ref={albumsRef}
          onWheel={handleWheel(albumsRef)}
        >
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>

        <h1 className="my-3 font-bold text-2xl rounded">
          Today's biggest hits
        </h1>
        <div
          className="scroll flex hide-scrollbar"
          ref={songsRef}
          onWheel={handleWheel(songsRef)}
        >
          {songsData.map((item, index) => (
            <Songitem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
