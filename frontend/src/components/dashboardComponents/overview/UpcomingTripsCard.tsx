import CustomCard from "@/components/custom/CustomCard";
import { Plane, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpcomingTripsCard() {
  return (
    <CustomCard
      title="Upcoming Trips"
      actionButtons={
        <Button
          variant="outline"
          size="sm"
          onClick={() => console.log("Request a Trip clicked")}
          className="flex items-center gap-1"
        >
          <Plane size={16} />
          Request a Trip
        </Button>
      }
    >
      <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
        <FileText size={42} />
        <h3 className="text-lg font-semibold">No trips added</h3>
        <p className="text-sm">
          Click <strong>"Request a Trip"</strong> to add your first trip.
        </p>
      </div>
    </CustomCard>
  );
}
