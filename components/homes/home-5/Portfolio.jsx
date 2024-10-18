// "use client";
// import { portfolios5 } from "@/data/portfolio";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Gallery, Item } from "react-photoswipe-gallery";
// import "photoswipe/dist/photoswipe.css"; // Ensure the styles for the modal are loaded

// const filters = [
//   { name: "Amenities", category: "design" },
//   { name: "Floor Plan", category: "branding" },
// ];

// export default function Portfolio() {
//   const [currentCategory, setCurrentCategory] = useState("design");
//   const [filtered, setFiltered] = useState(portfolios5);

//   useEffect(() => {
//     if (currentCategory == "all") {
//       setFiltered(portfolios5);
//     } else {
//       setFiltered(
//         [...portfolios5].filter((elm) =>
//           elm.categories.includes(currentCategory)
//         )
//       );
//     }
//   }, [currentCategory]);

//   return (
//     <>
//       <div className="container">
//         {/* Works Filter */}
//         <div className="works-filter works-filter-elegant text-center mb-50">
//           {filters.map((elm, i) => (
//             <a
//               onClick={() => setCurrentCategory(elm.category)}
//               key={i}
//               className={`filter ${
//                 currentCategory == elm.category ? "active" : ""
//               }`}
//             >
//               {elm.name}
//             </a>
//           ))}
//         </div>
//         {/* End Works Filter */}
//       </div>
//       <div className="position-relative">
//         {/* Works Grid */}
//         <ul
//           className="works-grid work-grid-4 work-grid-gut-sm hide-titles"
//           id="work-grid"
//         >
//           <Gallery>
//             {/* Work Item (Lightbox) */}
//             {filtered.map((item, index) => (
//               <li
//                 key={index}
//                 className={`work-item mix ${item.categories.join(" ")}`}
//               >
//                 {item.type === "Lightbox" ? (
//                   <Item
//                     original={item.imageSrc} // Image to display in the modal
//                     thumbnail={item.imageSrc} // Thumbnail to display on the page
//                     width={650}
//                     height={773}
//                   >
//                     {({ ref, open }) => (
//                       <a
//                         onClick={open} // This will trigger the modal
//                         className="work-lightbox-link mfp-image"
//                       >
//                         <div className="work-img">
//                           <div className="work-img-bg wow-p scalexIn" />
//                           <Image
//                             src={item.imageSrc}
//                             ref={ref}
//                             width={650}
//                             height={761}
//                             alt="Work Description"
//                           />
//                         </div>
//                         <div className="work-intro">
//                           <h3 className="work-title">{item.title}</h3>
//                           <div className="work-descr">{item.type}</div>
//                         </div>
//                       </a>
//                     )}
//                   </Item>
//                 ) : (
//                   <Link href="/" scroll={false} className="work-ext-link">
//                     <div className="work-img">
//                       <div className="work-img-bg" />
//                       <Image
//                         src={item.imageSrc}
//                         width={650}
//                         height={761}
//                         alt="Work Description"
//                       />
//                     </div>
//                     <div className="work-intro">
//                       <h3 className="work-title">{item.title}</h3>
//                       <div className="work-descr">{item.type}</div>
//                     </div>
//                   </Link>
//                 )}
//               </li>
//             ))}{" "}
//           </Gallery>
//           {/* End Work Item */}
//         </ul>
//         {/* End Works Grid */}
//       </div>
//     </>
//   );
// }

"use client";
import { portfolios5 } from "@/data/portfolio";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageModal from "@/components/ImageModal"; // Import your modal component

const filters = [
  { name: "Amenities", category: "design" },
  { name: "Floor Plan", category: "branding" },
];

export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("design");
  const [filtered, setFiltered] = useState(portfolios5);
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    if (currentCategory == "all") {
      setFiltered(portfolios5);
    } else {
      setFiltered(
        portfolios5.filter((elm) => elm.categories.includes(currentCategory))
      );
    }
  }, [currentCategory]);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container">
        {/* Works Filter */}
        <div className="works-filter works-filter-elegant text-center mb-50">
          {filters.map((elm, i) => (
            <a
              onClick={() => setCurrentCategory(elm.category)}
              key={i}
              className={`filter ${
                currentCategory == elm.category ? "active" : ""
              }`}
            >
              {elm.name}
            </a>
          ))}
        </div>
        {/* End Works Filter */}
      </div>
      <div className="position-relative">
        {/* Works Grid */}
        <ul
          className="works-grid work-grid-4 work-grid-gut-sm hide-titles"
          id="work-grid"
        >
          {filtered.map((item, index) => (
            <li
              key={index}
              className={`work-item mix ${item.categories.join(" ")}`}
            >
              <a
                onClick={() => openModal(item.imageSrc)}
                className="work-lightbox-link"
              >
                <div className="work-img">
                  <Image
                    src={item.imageSrc}
                    width={650}
                    height={761}
                    alt="Work Description"
                  />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">{item.title}</h3>
                  <div className="work-descr">{item.type}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {/* End Works Grid */}
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={closeModal}
      />
    </>
  );
}
