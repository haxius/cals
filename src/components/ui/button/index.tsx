import React from "react";
import styles from "./button.module.scss";
import cc from "classcat";

interface IButtonProperties {
  children: any;
  disabled?: boolean;
  frameless?: boolean;
  onClick: () => void;
}

const Button: React.FunctionComponent<IButtonProperties> = ({
  children,
  disabled,
  onClick,
  frameless,
}: IButtonProperties) => (
  <div
    className={cc([
      styles.button,
      { [styles.frameless]: !!frameless },
      { [styles.disabled]: !!disabled },
    ])}
    onClick={onClick}
    role="button"
  >
    {children}
  </div>
);

export default Button;
