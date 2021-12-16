// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { NewPlacesItem } from "./NewPlacesItem/NewPlacesItem";
// import styles from "./new-places.module.scss";
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// export const NewPlaces = ({ data }) => {
//   const [sliderRef, setSliderRef] = useState(null);
//   const restaurants = data.restaurants;

//   const sliderSettings = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: false,
//     dots: true,
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={sliderRef?.slickPrev}>prev</button>
//         <button onClick={sliderRef?.slickNext}>next</button>
//       </div>
//       <div className={styles.listBox}>
//         {restaurants?.map((item, i) => (
//           <NewPlacesItem key={`${item.name}-${i}`} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// NewPlaces.propTypes = { data: PropTypes.object, name: PropTypes.string };
