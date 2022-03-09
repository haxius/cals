import React from "react";
import styles from "./buttons.module.scss";

interface IButtonsProperties {
  children: any;
}

const Buttons: React.FunctionComponent<IButtonsProperties> = ({
  children,
}: IButtonsProperties) => <div className={styles.buttons}>{children}</div>;

export default Buttons;
