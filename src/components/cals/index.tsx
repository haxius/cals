import React from "react";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";
import styles from "./cals.module.scss";
import Calories from "../../context/calories";

interface ICalsProperties {}

const Cals: React.FunctionComponent = ({}: ICalsProperties) => (
  <div className={styles.cals}>
    <Calories>
      <Header />
      <Body />
      <Footer />
    </Calories>
  </div>
);

export default Cals;
