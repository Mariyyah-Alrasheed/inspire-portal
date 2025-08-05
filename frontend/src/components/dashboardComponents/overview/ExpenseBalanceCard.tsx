import CustomCard from "@/components/custom/CustomCard";
import { FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExpenseBalanceCard() {
  return (
    <CustomCard
      title="Expenses Balance"
      actionButtons={
        <Button
          variant="outline"
          size="sm"
          onClick={() => console.log("Add Expenses clicked")}
          className="flex items-center gap-1"
        >
          <Plus size={16} />
          Add Expenses
        </Button>
      }
    >
      <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
        <FileText size={42} />
        <h3 className="text-lg font-semibold">No Expenses added</h3>
        <p className="text-sm">
          Click <strong>"Add Expenses"</strong> to dummy text.
        </p>
      </div>
    </CustomCard>
  );
}
