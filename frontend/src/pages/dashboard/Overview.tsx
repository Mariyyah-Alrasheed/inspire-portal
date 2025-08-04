import ExpenseBalanceCard from "@/components/dashboardComponents/overview/ExpenseBalanceCard";
import LeaveBalanceCard from "@/components/dashboardComponents/overview/LeaveBalanceCard";
import UpcomingTripsCard from "@/components/dashboardComponents/overview/UpcomingTripsCard";

export default function Overview() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <LeaveBalanceCard />
      <UpcomingTripsCard />
      <ExpenseBalanceCard />
    </div>
  );
}
