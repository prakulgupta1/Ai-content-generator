"use client";

import React from "react";
import { AIOutput } from "@/utils/schema";
import { InferModel } from "drizzle-orm";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

type AIOutputType = InferModel<typeof AIOutput>;

export default function HistoryTable() {
  const { user } = useUser();
  const [rows, setRows] = React.useState<AIOutputType[]>([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (!user) return;
    const getData = async () => {
      const data = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress?.emailAddress ?? ""))
        .orderBy(AIOutput.createdAt); // newest first
      setRows(data);
    };
    getData();
  }, [user]);

  const filtered = rows.filter((r) =>
    r.templateSlug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <p className="text-sm text-gray-500 mb-4">
        Search your previously generated AI content
      </p>

      {/* Search input */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full border px-3 py-2 mb-4 rounded outline-none focus:ring"
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left border-b">
            <tr>
              <th className="py-2">TEMPLATE</th>
              <th className="py-2">AI RESP</th>
              <th className="py-2">DATE</th>
              <th className="py-2">WORDS</th>
              <th className="py-2">EDIT</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{row.templateSlug}</td>
                <td className="py-3 line-clamp-1 max-w-xs">
                  {row.aiResponse?.slice(0, 80)}...
                </td>
                <td className="py-3">{row.createdAt}</td>
                <td className="py-3">{row.aiResponse?.split(" ").length ?? 0}</td>
                <td className="py-3 text-primary underline">
                  <Link href={`/dashboard/content/${row.templateSlug}?id=${row.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="py-6 text-center text-gray-400">
                  No history yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
