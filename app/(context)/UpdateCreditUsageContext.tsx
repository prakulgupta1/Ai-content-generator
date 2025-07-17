"use client";

import { createContext } from "react";

export type UpdateCreditUsageContextType = {
  updateCreditUsage: boolean;
  setUpdateCreditUsage: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UpdateCreditUsageContext = createContext<UpdateCreditUsageContextType>({
  updateCreditUsage: false,
  setUpdateCreditUsage: () => {},
});
