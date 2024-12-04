import { useTranslations } from "next-intl";
import { LucideIcon } from "lucide-react";

interface Props {
  text: string;
  icon: LucideIcon;
}

const SidebarLeftItem: React.FC<Props> = ({ text, icon: Icon }) => {
  const t = useTranslations("product.sidebar");

  return (
    <li className='flex items-center gap-3 bg-white p-4 text-sm font-medium'>
      <div className='flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500'>
        <Icon size={20} />
      </div>
      {t(text as any)}
    </li>
  );
};

export default SidebarLeftItem;
