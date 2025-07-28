import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ReusableCardProps } from "../types/reusableCardType";
// interface ReusableCardProps {
//   title: string;
//   description?: string;
//   children: React.ReactNode;
//   footer?: React.ReactNode;
// }

export default function ReusableCard({
  title,
  description,
  children,
  footer,
}: ReusableCardProps) {
  return (
    <Card className="w-full max-w-xl bg-[#FCFCFC] text-left border border-[#EFF1F5] m-4 mt-8 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      {/* عرض عنصرين جنب بعض */}
      <CardContent className="grid grid-cols-2 gap-4">{children}</CardContent>

      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
