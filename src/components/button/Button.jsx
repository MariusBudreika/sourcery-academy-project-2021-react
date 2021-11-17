import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.scss";

const Kind = {
  PRIMARY: "primary",
  TEXT: "text",
  ACTION: "action",
};

const Size = {
  LARGE: "large",
};

const Color = {
  SECONDARY: "secondary",
  DUOCOLOR: "reverse",
};

const Type = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

export const Button = ({
  children = "DEFAULT",
  type = "button",
  kind = "primary",
  size,
  color,
}) => {
  return (
    <button
      type={type}
      className={cx(styles.btn, {
        [styles.primary]: kind === Kind.PRIMARY,
        [styles.text]: kind === Kind.TEXT,
        [styles.action]: kind === Kind.ACTION,
        [styles.secondary]: color === Color.SECONDARY,
        [styles.reverse]: color === Color.DUOCOLOR,
        [styles.large]: size === Size.LARGE,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  kind: PropTypes.oneOf(Object.values(Kind)),
  size: PropTypes.oneOf(Object.values(Size)),
  color: PropTypes.oneOf(Object.values(Color)),
  type: PropTypes.oneOf(Object.values(Type)),
};