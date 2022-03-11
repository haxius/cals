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
  const { currentDate, setCurrentDate } = useCalories();

  const d = new Date(currentDate);
  const weekday = weekdays[d.getDay()];
  const month = months[d.getMonth()];
  const dateSuffixed = `${d.getDate()}${daySuffix(
    d.getDate()
  )}`;
  const year = d.getFullYear();

  const applyDelta = (delta: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + delta);
    setCurrentDate(newDate.toISOString());
  };

  return (
    <div className={styles.header}>
      <Button frameless onClick={() => applyDelta(-1)}>
        Prev
      </Button>
      <Text>{`${weekday}, ${month} ${dateSuffixed}, ${year}`}</Text>
      <Button frameless onClick={() => applyDelta(1)}>
        Next
      </Button>
    </div>
  );
};

export default Header;
