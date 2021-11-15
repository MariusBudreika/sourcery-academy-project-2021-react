import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./_user-profile-widget.module.scss";
import userImage from "assets/user.png";
import imageMark from "assets/image-mark.png";
import { MenuItem } from "components/UserProfileWidget";

export const UserProfileWidget = () => {
  let [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((showMenuOld) => {
      return (isMenuVisible = !showMenuOld);
    });
  };

  const toggleMenuOnWindowClick = () => {
    if (isMenuVisible) {
      setIsMenuVisible((showMenuOld) => {
        return (isMenuVisible = !showMenuOld);
      });
    }
  };

  useEffect(() => {
    if (isMenuVisible) {
      document.body.addEventListener("click", toggleMenuOnWindowClick);
    }
    return () => {
      window.removeEventListener("click", toggleMenuOnWindowClick);
    };
  });

  return (
    <div className={styles.userProfileWidget}>
      <div>
        <button
          type="button"
          onClick={toggleMenu}
          className={styles.userProfileWidgetMenuButton}
        >
          <img
            src={userImage}
            alt=""
            className={styles.userProfileWidgetImage}
          />
          <img
            src={imageMark}
            alt="icon"
            className={styles.userProfileWidgetMark}
          />
        </button>
        <div
          className={cx(styles.userProfileMenu, {
            isActive: isMenuVisible,
          })}
        >
          <span className={styles.userProfileMenuPointer}>{}</span>
          <div className={styles.userProfileMenuButtons}>
            <MenuItem title="Settings" stylesClass="topButton" />
            <MenuItem title="Log out" stylesClass="bottomButton" />
          </div>
        </div>
      </div>
    </div>
  );
};
