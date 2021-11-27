import React from "react";
import styles from "./star-rating.module.scss";

export const StarRating = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2657 4.596L8.72525 4.0815L7.14375 0.875504C7.09777 0.797433 7.03221 0.732716 6.95355 0.687754C6.87488 0.642791 6.78585 0.619141 6.69525 0.619141C6.60464 0.619141 6.51561 0.642791 6.43695 0.687754C6.35829 0.732716 6.29272 0.797433 6.24675 0.875504L4.66225 4.0815L1.12175 4.596C1.02942 4.60933 0.942656 4.64822 0.871274 4.70828C0.799892 4.76834 0.746735 4.84717 0.717813 4.93586C0.688891 5.02455 0.685358 5.11956 0.707612 5.21016C0.729867 5.30075 0.777022 5.38331 0.843746 5.4485L3.40625 7.9455L2.80175 11.472C2.78599 11.564 2.79627 11.6585 2.83144 11.7449C2.8666 11.8313 2.92523 11.9062 3.00071 11.961C3.07619 12.0158 3.1655 12.0484 3.25855 12.0551C3.3516 12.0619 3.44467 12.0424 3.52725 11.999L6.69375 10.3345L9.86025 11.999C9.94282 12.0424 10.0359 12.0619 10.1289 12.0551C10.222 12.0484 10.3113 12.0158 10.3868 11.961C10.4623 11.9062 10.5209 11.8313 10.5561 11.7449C10.5912 11.6585 10.6015 11.564 10.5857 11.472L9.98125 7.9455L12.5437 5.4485C12.6105 5.38338 12.6576 5.30089 12.6799 5.21037C12.7022 5.11985 12.6988 5.0249 12.67 4.93624C12.6412 4.84757 12.5881 4.76873 12.5169 4.70861C12.4456 4.64849 12.359 4.60949 12.2667 4.596H12.2657Z"
            fill="#31465E"
          />
        </svg>
      </div>
      <p className={styles.rating}>4.5</p>
    </div>
  );
};
