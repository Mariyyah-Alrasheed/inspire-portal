import CustomCard from "@/components/custom/CustomCard";
import { Card } from "@/components/ui/card";
import { CalendarPlus } from "lucide-react";

export default function LeaveBalanceCard() {
  return (
    <>
      <div className="">
        <CustomCard
          title="Leave Balance"
          actionLabel="Request Leave"
          actionIcon={<CalendarPlus size={16} />}
          onActionClick={() => console.log("Leave clicked")}
        >
          <div className="flex flex-row gap-4">
            {/* Annual Vacation Card */}
            <Card className="border p-2 w-56">
              <div className="flex flex-row items-center gap-4">
                {/* أيقونة كبيرة على اليسار */}
                <div className="text-2xl select-none">🌴</div>
                {/* المحتوى يمين الأيقونة */}
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    Annual Vacation
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-primary">
                      14.00
                    </span>
                    <span className="text-base text-muted-foreground">
                      /11.62
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Days</p>
                </div>
              </div>
            </Card>

            {/* Sick Days Off Card */}
            <Card className="border p-2 w-56">
              <div className="flex flex-row items-center gap-4">
                <div className="text-2xl select-none">🤒</div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    Sick Days Off
                  </div>
                  <div className="flex items-end ">
                    <span className="text-2xl font-bold text-primary">
                      10.00
                    </span>
                    <span className="text-base text-muted-foreground">
                      /12.00
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Days</p>
                </div>
              </div>
            </Card>
          </div>
        </CustomCard>
      </div>
    </>
  );
}
