'use client';

import { useState } from "react";

export default function BudgetChangesPage() {
  const [budget, setBudget] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(true); // Simulated trigger
  };

return (
    <div className="min-h-screen bg-rmit-lightGrey p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-rmit-red mb-4">
          Flexible Budget Changes
        </h1>
        <p className="text-gray-600 mb-6">
          Adjust the budget when spending changes or programs are added/removed.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-rmit-black mb-1">
              Additional Budget ($)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="input input-bordered w-full border border-rmit-grey p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold text-rmit-black mb-1">
              Program Change
            </label>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="select w-full border border-rmit-grey p-2 rounded"
            >
              <option disabled value="">
                Select a program
              </option>
              <option>New Program: AI-2026</option>
              <option>Remove Program: COSC1123</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-rmit-blue text-white py-2 px-4 rounded hover:bg-rmit-red transition"
          >
            Submit Change
          </button>
        </form>

        {showSuggestions && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-rmit-black mb-2">
              Suggested Budget Reallocations
            </h2>
            <div className="bg-rmit-lightGrey p-4 rounded shadow">
              <ul className="list-disc ml-5 text-sm text-gray-700">
                <li>Move $1000 from COSC1234 to COSC2468</li>
                <li>Allocate $800 to AI-2026</li>
              </ul>
            </div>

            <div className="bg-rmit-red text-white p-3 mt-4 rounded shadow">
              ⚠️ Potential budget shortage detected for COSC3010.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
