<<<<<<< HEAD
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
=======
"use client";

import { createContext } from "react";

interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
}

export const TotalUsageContext = createContext<TotalUsageContextType>({
  totalUsage: 0,
  setTotalUsage: () => {},
});
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
