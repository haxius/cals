import React from "react";
import Button from "../ui/button";
import Text from "../ui/text";
import styles from "./header.module.scss";
import { useCalories } from "../../context/calories";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const daySuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

interface IHeaderProperties {}

const Header: React.FunctionComponent = ({}: IHeaderProperties) => {
  const { currentDate } = useCalories();

  const weekday = weekdays[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const dateSuffixed = `${currentDate.getDate()}${daySuffix(
    currentDate.getDate()
  )}`;
  const year = currentDate.getFullYear();

  return (
    <div className={styles.header}>
      <Button frameless onClick={() => {}}>
        Prev
      </Button>
      <Text>{`${weekday}, ${month} ${dateSuffixed}, ${year}`}</Text>
      <Button frameless onClick={() => {}}>
        Next
      </Button>
    </div>
  );
};

export default Header;
