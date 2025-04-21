'use client';

import { useState } from 'react';

export default function SpendingChecksPage() {
  const [realSpend, setRealSpend] = useState<number>(12000);
  const [plannedSpend, setPlannedSpend] = useState<number>(10000);

  const variance = realSpend - plannedSpend;
  const overBudget = variance > 0;

  const [changes, setChanges] = useState([
    {
      url: 'https://rmit.edu.au/study/ai',
      changedTag: 'meta[name="keywords"]',
      timestamp: '2025-04-21 14:30',
    },
    {
      url: 'https://rmit.edu.au/courses/cosc1234',
      changedTag: 'div#main-title',
      timestamp: '2025-04-20 10:45',
    },
  ]);

  return (
    <div className="p-6 space-y-10">
      {/* Section 1: Daily Spending Checks */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Daily Spending Checks</h1>

        <div className="grid grid-cols-2 gap-6 max-w-xl">
          <div className="bg-white p-4 rounded shadow border">
            <h2 className="font-semibold text-gray-700">Planned Spend</h2>
            <p className="text-2xl text-blue-700">${plannedSpend}</p>
          </div>

          <div className="bg-white p-4 rounded shadow border">
            <h2 className="font-semibold text-gray-700">Real Spend</h2>
            <p className="text-2xl text-rmit-red">${realSpend}</p>
          </div>
        </div>

        <div className="mt-6 text-lg">
          {overBudget ? (
            <p className="text-red-600 font-semibold">
              ⚠️ Over budget by ${variance}
            </p>
          ) : (
            <p className="text-green-600 font-semibold">
              ✅ Under budget by ${-variance}
            </p>
          )}
        </div>
      </section>

      {/* Section 2: Content / Source Code Checks */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Layout / Source Code Checks</h2>
        <p className="mb-4 text-gray-700">
          This tool detects changes in course page source code or layout elements.
        </p>

        <div className="bg-white shadow border rounded overflow-auto">
          <table className="table-auto w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-rmit-lightGrey">
                <th className="p-3 font-semibold">URL</th>
                <th className="p-3 font-semibold">Changed Element</th>
                <th className="p-3 font-semibold">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {changes.map((entry, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-blue-600 underline">{entry.url}</td>
                  <td className="p-3">{entry.changedTag}</td>
                  <td className="p-3">{entry.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

