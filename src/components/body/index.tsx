import React from "react";
import Text from "../ui/text";
import styles from "./body.module.scss";

interface IBodyProperties {}

const Body: React.FunctionComponent = ({}: IBodyProperties) => (
    <div className={styles.body}>
        <Text>{new Date().getDate().toString()}</Text>
    </div>
);

export default Body;
