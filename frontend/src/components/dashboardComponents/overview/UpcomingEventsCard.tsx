import { useState } from "react";
import CustomCard from "@/components/custom/CustomCard";
import { Calendar } from "lucide-react";

export default function UpcomingEventsCard() {
  const [filter, setFilter] = useState<"anniversary" | "birthday">(
    "anniversary"
  );

  const events = [
    {
      date: "Mar 30",
      name: "Sousan Sabri",
      event: "1st Anniversary",
      emoji: "🎉",
    },
    {
      date: "Mar 30",
      name: "Malek Khaled",
      event: "4th Anniversary",
      emoji: "🎉",
    },
    {
      date: "Mar 30",
      name: "Ola Shamout",
      event: "Birthday",
      emoji: "🎂",
    },
  ];

  const filteredEvents = events.filter((e) =>
    filter === "anniversary"
      ? e.event.toLowerCase().includes("anniversary")
      : e.event.toLowerCase().includes("birthday")
  );

  return (
    <CustomCard title="Upcoming Events">
      {/* الفلاتر تحت العنوان */}
      <div className="flex justify-center mb-4 border-b border-gray-200">
        {["anniversary", "birthday"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "anniversary" | "birthday")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all ${
              filter === type
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            {type === "anniversary" ? "🎉 Anniversary" : "🎂 Birthday"}
          </button>
        ))}
      </div>

      {/* قائمة الأحداث */}
      <div className="space-y-2">
        {filteredEvents.length === 0 ? (
          <p className="text-sm text-muted-foreground">No events found.</p>
        ) : (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-b-0 pb-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{event.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {event.name}
                  </p>
                  <p className="text-xs text-gray-500">{event.event}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {event.date}
              </div>
            </div>
          ))
        )}
      </div>
    </CustomCard>
  );
}
