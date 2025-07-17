// UsageTrack.tsx
"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState, useContext } from "react";


import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

function UsageTrack() {
  const { user } = useUser();


  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    if (!user) return; 

    const GetData = async () => {

      const userEmail = user.primaryEmailAddress?.emailAddress;
      if (!userEmail) {
        console.warn("User email not available, skipping data fetch.");
        return;
      }

      const rows = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, userEmail));

      const total = rows.reduce((sum, row) => sum + (row.aiResponse?.length ?? 0), 0);
      setTotalUsage(total); // Using setTotalUsage
    };

    GetData();
  }, [updateCreditUsage, user, setTotalUsage]); 

  const progress = {
    width: `${(totalUsage / 10000) * 100}%`, 
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>

        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div style={progress} className="h-full bg-white rounded-full" />
        </div>

        <h2 className="text-sm my-2">
          {totalUsage.toLocaleString()}/10,000 Credits used
        </h2>
      </div>

      <Button variant="secondary" className="w-full my-3 text-pr">
        Upgrade
      </Button>
    </div>
  );
}
export default UsageTrack;