// components/CustomCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";

interface CustomCardProps {
  title: string;
  onActionClick?: () => void;
  actionLabel?: string;
  actionIcon?: ReactNode;
  children: ReactNode;
}

export default function CustomCard({
  title,
  onActionClick,
  actionLabel,
  actionIcon,
  children,
}: CustomCardProps) {
  return (
    <Card className="w-full h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        {actionLabel && (
          <Button
            variant="outline"
            size="sm"
            onClick={onActionClick}
            className="flex items-center justify-center text-green-900"
          >
            {actionIcon && <span className="mr-1">{actionIcon}</span>}
            {actionLabel}
          </Button>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
