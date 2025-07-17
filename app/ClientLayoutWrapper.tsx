// app/ClientLayoutWrapper.tsx
"use client";
import { TotalUsageContext } from "./(context)/TotalUsageContext";
import { useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react"; // Explicitly import React

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <ClerkProvider>{children}</ClerkProvider>
    </TotalUsageContext.Provider>
  );
}