"use client";

import { createContext } from "react";

interface UpdateCreditContextType {
  updateCreditUsage: number;
  setUpdateCreditUsage: (value: number) => void;
}

export const UpdateCreditUsageContext = createContext<UpdateCreditContextType>({
  updateCreditUsage: 0,
  setUpdateCreditUsage: () => {},
});
