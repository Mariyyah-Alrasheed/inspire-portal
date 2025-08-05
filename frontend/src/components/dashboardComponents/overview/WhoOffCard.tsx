"use client";

import { useState } from "react";
import CustomCard from "@/components/custom/CustomCard";
import { Calendar } from "lucide-react";

export default function WhoOffCard() {
  const [filter, setFilter] = useState<"annual" | "sick">("annual");

  const leaves = [
    {
      date: "Mar 30",
      name: "Ahmed Zaki",
      type: "Annual Vacation",
      emoji: "🌴",
    },
    {
      date: "Mar 30",
      name: "Layla Hamad",
      type: "Sick Vacation",
      emoji: "😷",
    },
    {
      date: "Mar 30",
      name: "Sara Alawi",
      type: "Annual Vacation",
      emoji: "🌴",
    },
  ];

  const filteredLeaves = leaves.filter((leave) =>
    filter === "annual"
      ? leave.type.toLowerCase().includes("annual")
      : leave.type.toLowerCase().includes("sick")
  );

  return (
    <CustomCard title="Who is off?">
      {/* الفلاتر تحت العنوان بالنص */}
      <div className="flex justify-center mb-4 border-b border-gray-200">
        {["annual", "sick"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "annual" | "sick")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all ${
              filter === type
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            {type === "annual" ? "🌴 Annual Vacation" : "😷 Sick Vacation"}
          </button>
        ))}
      </div>

      {/* القائمة */}
      <div className="space-y-2">
        {filteredLeaves.length === 0 ? (
          <p className="text-sm text-muted-foreground">No one is off.</p>
        ) : (
          filteredLeaves.map((leave, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-b-0 pb-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{leave.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {leave.name}
                  </p>
                  <p className="text-xs text-gray-500">{leave.type}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {leave.date}
              </div>
            </div>
          ))
        )}
      </div>
    </CustomCard>
  );
}
