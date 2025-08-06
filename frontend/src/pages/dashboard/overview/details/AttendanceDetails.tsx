import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock } from "lucide-react";

export default function AttendanceDetails() {
  const attendanceData = [
    {
      day: "Sunday",
      date: "Mar 16, 2025",
      punchIn: "09:13 AM",
      punchOut: "03:16 PM",
      hours: "6.03 hr",
      status: "On Office",
    },
    {
      day: "Monday",
      date: "Mar 17, 2025",
      punchIn: "09:16 AM",
      punchOut: "03:16 PM",
      hours: "6.0 hr",
      status: "On Office",
    },
    {
      day: "Tuesday",
      date: "Mar 18, 2025",
      punchIn: "09:13 AM",
      punchOut: "-",
      hours: "_",
      status: "Trip Leave",
    },
    {
      day: "Wednesday",
      date: "Mar 19, 2025",
      punchIn: "-",
      punchOut: "-",
      hours: "_",
      status: "Trip Leave",
    },
    {
      day: "Thursday",
      date: "Mar 20, 2025",
      punchIn: "-",
      punchOut: "-",
      hours: "_",
      status: "Trip Leave",
    },
    {
      day: "Friday",
      date: "Mar 21, 2025",
      punchIn: "-",
      punchOut: "-",
      hours: "_",
      status: "Trip Leave",
    },
    {
      day: "Saturday",
      date: "Mar 22, 2025",
      punchIn: "-",
      punchOut: "-",
      hours: "_",
      status: "Trip Leave",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Attendance Details</h1>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 text-xs">
            <TableHead className="text-gray-500 font-semibold">Day</TableHead>
            <TableHead className="text-gray-500 font-semibold">Date</TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Punch In
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Punch Out
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">Hours</TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Status
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-gray-700 text-sm">
          {attendanceData.map((item, idx) => (
            <TableRow key={idx} className="odd:bg-white even:bg-gray-50">
              <TableCell className="font-medium">{item.day}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                {item.punchIn !== "-" ? (
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-500" />
                    {item.punchIn}
                  </span>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>
                {item.punchOut !== "-" ? (
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    {item.punchOut}
                  </span>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>{item.hours}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Punch In
                  </Button>
                  <Button variant="outline" size="sm">
                    Punch Out
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
