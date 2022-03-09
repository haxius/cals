import React from "react";
import styles from "./button.module.scss";
import cc from "classcat";

interface IButtonProperties {
  children: any;
  onClick: () => void;
  frameless?: boolean;
}

const Button: React.FunctionComponent<IButtonProperties> = ({
  children,
  onClick,
  frameless,
}: IButtonProperties) => (
  <div
    className={cc([styles.button, { [styles.frameless]: !!frameless }])}
    onClick={onClick}
    role="button"
  >
    {children}
  </div>
);

export default Button;
