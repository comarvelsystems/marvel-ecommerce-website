"use client";

import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface Props {
  variant: "success" | "error" | "info";
  title: string;
  message: string;
}

const StatusAlert: React.FC<Props> = ({ variant, message, title }) => {
  const t = useTranslations();

  const alertVariants = {
    success: "border-emerald-500 bg-emerald-500/5 text-emerald-600",
    error: "border-destructive bg-destructive/5",
    info: "border-sky-500 bg-sky-500/5 text-sky-600",
  };

  return (
    <Alert
      variant={variant === "error" ? "destructive" : "default"}
      className={cn("rounded-none border-0 border-b-2", alertVariants[variant])}
    >
      <AlertCircle
        className={cn(
          "h-4 w-4",
          variant === "success" && "stroke-emerald-600",
          variant === "info" && "stroke-sky-600",
        )}
      />
      <AlertTitle>{t(title as any)}</AlertTitle>
      <AlertDescription>{t(message as any)}</AlertDescription>
    </Alert>
  );
};

export default StatusAlert;
