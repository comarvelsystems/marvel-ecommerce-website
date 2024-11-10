"use client";

import { useTranslations } from "next-intl";
import { RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  refetch: () => void;
}

const RefetchButton: React.FC<Props> = ({ refetch }) => {
  const t = useTranslations("globals.buttons");

  return (
    <Button onClick={() => refetch()} className='gap-1.5'>
      <RefreshCcw size={18} />
      {t("refetch")}
    </Button>
  );
};

export default RefetchButton;
