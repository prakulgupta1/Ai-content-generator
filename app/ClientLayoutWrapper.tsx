"use client";

import { TotalUsageContext } from "./(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "./(context)/UpdateCreditUsageContext";
import { useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider
        value={{ updateCreditUsage, setUpdateCreditUsage }}
      >
        <ClerkProvider>{children}</ClerkProvider>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}
