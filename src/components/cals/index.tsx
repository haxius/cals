import React from "react";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";
import styles from "./cals.module.scss";

interface ICalsProperties {}

const Cals: React.FunctionComponent = ({}: ICalsProperties) => (
  <div className={styles.cals}>
    <Header />
    <Body />
    <Footer />
  </div>
);

export default Cals;
