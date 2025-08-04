import CustomCard from "@/components/custom/CustomCard";
import { FileText, Plus } from "lucide-react";

export default function ExpenseBalanceCard() {
  return (
    <div className="">
      <CustomCard
        title="Expenses Balance"
        actionLabel="Add Expenses"
        actionIcon={<Plus size={16} />}
        onActionClick={() => console.log("Request a Expenses clicked")}
      >
        <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
          <FileText size={42} />
          <h3 className="text-lg font-semibold">No Expenses added</h3>
          <p className="text-sm">
            Click <strong>"Add Expenses"</strong> to dummy text.
          </p>
        </div>
      </CustomCard>
    </div>
  );
}
