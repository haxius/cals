import React from "react";
import Button from "../ui/button";
import Text from "../ui/text";
import styles from "./header.module.scss";

interface IHeaderProperties {}

const Header: React.FunctionComponent = ({}: IHeaderProperties) => (
    <div className={styles.header}>
        <Button frameless onClick={() => {}}>Prev</Button>
        <Text>{new Date().getDate().toString()}</Text>
        <Button frameless onClick={() => {}}>Next</Button>
    </div>
);

export default Header;
