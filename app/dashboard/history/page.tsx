// app/dashboard/history/page.tsx

"use client";
import React from "react";
import HistoryTable from "./_components/HistoryTable";

export default function HistoryPage() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-4">History</h2>
      <HistoryTable />
    </div>
  );
}
