// app/(context)/TotalUsageContext.ts
import { createContext } from "react";

export const TotalUsageContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>]>([
  0,
  () => {},
]);
