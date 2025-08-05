import ExpenseBalanceCard from "@/components/dashboardComponents/overview/ExpenseBalanceCard";
import LeaveBalanceCard from "@/components/dashboardComponents/overview/LeaveBalanceCard";
import UpcomingTripsCard from "@/components/dashboardComponents/overview/UpcomingTripsCard";
import AttendanceCard from "@/components/dashboardComponents/overview/AttendanceCard";
import UpcomingEventsCard from "@/components/dashboardComponents/overview/UpcomingEventsCard";
import WhoOffCard from "@/components/dashboardComponents/overview/WhoOffCard";

export default function Overview() {
  return (
    <div className="space-y-6">
      <div
        className="
        grid grid-cols-1 md:grid-cols-[1.8fr_1.3fr_1.3fr] gap-4
      "
      >
        <LeaveBalanceCard />
        <UpcomingTripsCard />
        <ExpenseBalanceCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.9fr_1.1fr_1.4fr] gap-4">
        <AttendanceCard />
        <UpcomingEventsCard />
        <WhoOffCard />
      </div>
    </div>
  );
}
