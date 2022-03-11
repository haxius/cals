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
  getCount: () => number;
  updateCount: (newCount: number) => void;
  currentDate: string;
  setCurrentDate: (newDate: string) => void;
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
    result = decodeURIComponent(jsonString || "");
    result = JSON.parse(result);
  } catch (e: unknown) {}

  return result;
};

const getTodayFromMidnight = () => {
  const d = new Date();
  d.setHours(0,0,0,0);
  return d.toISOString();
};

const Calories: React.FunctionComponent<ICaloriesContextProperties> = ({
  children,
}) => {
  const [currentDate, setCurrentDate] = React.useState<string>(getTodayFromMidnight());

  const [data, setData] = React.useState<ICaloriesData>(
    (safeJSONParse(Cookies.get("cals")) as ICaloriesData) || {
      counts: [],
      lastUpdated: new Date(),
    }
  );

  const handleUpdateDb = (newDb: ICaloriesData): void => {
    Cookies.set("cals", JSON.stringify(newDb), { expires: 14 });
    setData(newDb);
  };

  const updateCount = (newCount: number): void => {
    const newDb = { counts: { ...data.counts }, lastUpdated: new Date() };
    newDb.counts[currentDate] = newCount < 0 ? 0 : newCount;
    handleUpdateDb(newDb);
  };

  const getCount = (): number => data.counts[currentDate] || 0;

  return (
    <CaloriesContext.Provider
      value={{ currentDate, getCount, updateCount, setCurrentDate }}
    >
      {children}
    </CaloriesContext.Provider>
  );
};

export default Calories;
