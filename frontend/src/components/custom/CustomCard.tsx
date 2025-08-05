import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
interface CustomCardProps {
  title: string;
  subtitle?: string | ReactNode;
  actionButtons?: ReactNode;
  // Props قديمة، اختيارية
  onActionClick?: () => void;
  actionLabel?: string;
  actionIcon?: ReactNode;
  actionButtonClassName?: string;
  children: ReactNode;
  cardClassName?: string;
}

export default function CustomCard({
  title,
  subtitle,
  actionButtons,
  onActionClick,
  actionLabel,
  actionIcon,
  actionButtonClassName,
  children,
  cardClassName,
}: CustomCardProps) {
  // زر واحد (قديم) لو ما مررنا actionButtons
  const singleButton = actionLabel ? (
    <Button
      variant="outline"
      size="sm"
      onClick={onActionClick}
      className={`flex items-center justify-center text-green-900 ${
        actionButtonClassName ?? ""
      }`}
    >
      {actionIcon && <span className="mr-1">{actionIcon}</span>}
      {actionLabel}
    </Button>
  ) : null;

  return (
    <Card
      className={`h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl ${
        cardClassName ?? ""
      }`}
    >
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <CardTitle className="text-base">{title}</CardTitle>
          {subtitle && (
            <span className="bg-muted text-xs px-2 py-1 rounded-2xl">
              {subtitle}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-green-900">
          {actionButtons ?? singleButton}
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
