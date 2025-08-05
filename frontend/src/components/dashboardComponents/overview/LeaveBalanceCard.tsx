import CustomCard from "@/components/custom/CustomCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

export default function LeaveBalanceCard() {
  return (
    <CustomCard
      title="Leave Balance"
      actionButtons={
        <Button
          variant="outline"
          size="sm"
          onClick={() => console.log("Leave clicked")}
        >
          <CalendarPlus size={16} />
          Request Leave
        </Button>
      }
      cardClassName="h-full"
    >
      <div className="flex flex-wrap flex-row gap-2 ">
        {/* Annual Vacation Card */}
        <Card className="border flex-1 min-w-[25px] ">
          <div className="flex flex-row items-center gap-2">
            <div className="text-2xl select-none">🌴</div>
            <div>
              <div className="text-xs font-medium text-muted-foreground mb-1">
                Annual Vacation
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-primary">14.00</span>
                <span className="text-base text-muted-foreground">/11.62</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Days</p>
            </div>
          </div>
        </Card>

        {/* Sick Days Off Card */}
        <Card className="border flex-1 min-w-[25px] w-fit">
          <div className="flex flex-row items-center gap-2">
            <div className="text-2xl select-none">🤒</div>
            <div>
              <div className="text-xs font-medium text-muted-foreground mb-1">
                Sick Days Off
              </div>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-primary">10.00</span>
                <span className="text-base text-muted-foreground">/12.00</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Days</p>
            </div>
          </div>
        </Card>
      </div>
    </CustomCard>
  );
}
