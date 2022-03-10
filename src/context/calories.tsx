import Cookies from "js-cookie";
import React from "react";

export interface IDailyCounts {
  [key: string]: number;
}

export interface ICaloriesData {
  counts: IDailyCounts;
  lastUpdated: Date;
}

export interface ICaloriesContext {
  data: ICaloriesData;
  updateCount: (newCount: number) => void;
  currentDate: Date;
  setCurrentDate: (newDate: Date) => void;
}

export interface ICaloriesContextProperties {
  children: any;
}

const CaloriesContext = React.createContext<ICaloriesContext | undefined>(
  undefined
);

export const useCalories = () => {
  const caloriesContext = React.useContext(CaloriesContext);
  if (!caloriesContext) {
    throw new Error(
      "useCalories must be used within a CaloriesContext Provider"
    );
  }
  return caloriesContext;
};

const safeJSONParse = (jsonString: string | undefined): object | undefined => {
  let result;

  try {
    result = JSON.parse(jsonString || "");
  } catch (e: unknown) {}

  return result;
};

const Calories: React.FunctionComponent<ICaloriesContextProperties> = ({
  children,
}) => {
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());

  const [data, setData] = React.useState<ICaloriesData>(
    (safeJSONParse(Cookies.get("cals")) as ICaloriesData) || {
      counts: [],
      lastUpdated: new Date(),
    }
  );

  const handleUpdateDb = (newDb: ICaloriesData): void => {
    Cookies.set(JSON.stringify(newDb), { expires: 14 });
    setData(newDb);
  };

  const updateCount = (newCount: number): void => {
    const newDb = { counts: { ...data.counts }, lastUpdated: new Date() };
    newDb.counts[currentDate.toISOString()] = newCount;
    handleUpdateDb(newDb);
  };

  return (
    <CaloriesContext.Provider
      value={{ currentDate, data, updateCount, setCurrentDate }}
    >
      {children}
    </CaloriesContext.Provider>
  );
};

export default Calories;
