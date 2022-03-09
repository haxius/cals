import Cookies from "js-cookie";
import React from "react";

export interface IDailyCount {
  count: number;
  date: Date;
}

interface ICaloriesData {
  counts: IDailyCount[];
  lastUpdated: Date;
}

interface ICaloriesContext {
  data: ICaloriesData;
}

interface ICaloriesContextProperties {
  children: any;
}

const CaloriesContext = React.createContext<ICaloriesContext | undefined>(
  undefined
);

export const useCaloriesContext = () => {
  const caloriesContext = React.useContext(CaloriesContext);
  if (!caloriesContext) {
    throw new Error(
      "useCaloriesContext must be used within a CaloriesContext Provider"
    );
  }
  return caloriesContext;
};

const Calories: React.FunctionComponent<ICaloriesContextProperties> = ({
  children,
}) => {
  const [db, setDb] = React.useState<ICaloriesData>(
    JSON.parse(Cookies.get("cals") || "") || {
      counts: [],
      lastUpdated: new Date(),
    }
  );

  return (
    <CaloriesContext.Provider value={{ data: db }}>
      {children}
    </CaloriesContext.Provider>
  );
};

export default Calories;
