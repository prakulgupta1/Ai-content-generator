// app/(context)/TotalUsageContext.ts
"use client";

import { createContext, Dispatch, SetStateAction } from "react";


interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: Dispatch<SetStateAction<number>>;
}


export const TotalUsageContext = createContext<TotalUsageContextType>({
  totalUsage: 0,
  setTotalUsage: () => {}, 
});