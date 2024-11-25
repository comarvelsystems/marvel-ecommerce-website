import { LucideIcon } from "lucide-react";

interface Props {
  text: string;
  icon: LucideIcon;
}

const SidebarLeftItem: React.FC<Props> = ({ text, icon: Icon }) => {
  return (
    <li className='flex items-center gap-3 bg-white p-4 text-sm font-medium'>
      <div className='flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500'>
        <Icon size={20} />
      </div>
      {text}
    </li>
  );
};

export default SidebarLeftItem;
