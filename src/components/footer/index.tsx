import React from "react";
import Button from "../ui/button";
import Buttons from "../ui/buttons";
import styles from "./footer.module.scss";

interface IFooterProperties {}

const Footer: React.FunctionComponent = ({}: IFooterProperties) => (
    <div className={styles.footer}>
        <Buttons>
            <Button onClick={() => {}}>-5</Button>
            <Button onClick={() => {}}>+5</Button>
            <Button onClick={() => {}}>-10</Button>
            <Button onClick={() => {}}>+10</Button>
            <Button onClick={() => {}}>-100</Button>
            <Button onClick={() => {}}>+100</Button>
        </Buttons>
    </div>
);

export default Footer;
