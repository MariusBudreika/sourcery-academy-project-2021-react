import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./pageContainer.module.scss";

export const PageContainer = ({ children, className, isFullWidth = false }) => (
  <div
    className={cx(
      isFullWidth ? styles.containerFullWidth : styles.container,
      className
    )}
  >
    {children}
  </div>
);

PageContainer.propTypes = {
  isFullWidth: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
};
