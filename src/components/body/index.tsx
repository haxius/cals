import React from "react";
import { useCalories } from "../../context/calories";
import Text from "../ui/text";
import styles from "./body.module.scss";

interface IBodyProperties {}

const Body: React.FunctionComponent = ({}: IBodyProperties) => {
  const { getCount } = useCalories();

  return (
    <div className={styles.body}>
      <Text>
        <>{getCount()}</>
      </Text>
    </div>
  );
};

export default Body;
