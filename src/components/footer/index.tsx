import React from "react";
import { useCalories } from "../../context/calories";
import Button from "../ui/button";
import Buttons from "../ui/buttons";
import styles from "./footer.module.scss";

interface IFooterProperties {}

const Footer: React.FunctionComponent = ({}: IFooterProperties) => {
  const { getCount, updateCount } = useCalories();

  const applyDelta = (delta: number): void => {
    updateCount(getCount() + delta);
  };

  const disabled = getCount() <= 0;

  return (
    <div className={styles.footer}>
      <Buttons>
        <Button disabled={disabled} onClick={() => applyDelta(-5)}>
          -5
        </Button>
        <Button onClick={() => applyDelta(5)}>+5</Button>
        <Button disabled={disabled} onClick={() => applyDelta(-10)}>
          -10
        </Button>
        <Button onClick={() => applyDelta(10)}>+10</Button>
        <Button disabled={disabled} onClick={() => applyDelta(-100)}>
          -100
        </Button>
        <Button onClick={() => applyDelta(100)}>+100</Button>
        <Button disabled={disabled} onClick={() => applyDelta(-1000)}>
          -1000
        </Button>
        <Button onClick={() => applyDelta(1000)}>+1000</Button>
      </Buttons>
    </div>
  );
};

export default Footer;
