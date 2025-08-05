import CustomCard from "@/components/custom/CustomCard";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock, Eye } from "lucide-react";

export default function AttendanceCard() {
  return (
    <CustomCard
      title="Weekly Attendance"
      subtitle="Mar 16 - 22 Mar"
      actionButtons={
        <Button variant="outline" size="sm" onClick={() => console.log("عرض")}>
          <Eye className="w-4 h-4" />
        </Button>
      }
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100 text-xs">
            {" "}
            {/* خلي الخلفية هنا */}
            <TableHead className="text-left text-gray-500 font-semibold py-2">
              Day
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">Date</TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Punch In
            </TableHead>
            <TableHead className="text-gray-500 font-semibold">
              Punch Out
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-gray-500">
          <TableRow className="odd:bg-white even:bg-gray-100">
            <TableCell className="text-gray-950">Sunday</TableCell>
            <TableCell>Mar 16</TableCell>
            <TableCell>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                09:13 AM
              </span>
            </TableCell>

            <TableCell>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" />
                09:13 AM
              </span>
            </TableCell>
          </TableRow>

          <TableRow className="odd:bg-white even:bg-gray-100">
            <TableCell className="text-gray-950">Monday</TableCell>
            <TableCell>Mar 17</TableCell>
            <TableCell>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                09:13 AM
              </span>
            </TableCell>

            <TableCell>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" />
                09:13 AM
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CustomCard>
  );
}
