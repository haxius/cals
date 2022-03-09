import React from "react";
import styles from "./text.module.scss";

interface ITextProperties {
  children: any;
}

const Text: React.FunctionComponent<ITextProperties> = ({
  children,
}: ITextProperties) => (
  <span className={styles.text}>
    {children}
  </span>
);

export default Text;
