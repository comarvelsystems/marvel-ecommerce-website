import HeaderBottom from "./header-bottom";
import HeaderTop from "./header-top";

export default function Header() {
  return (
    <header className='border-b border-border/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Navigation */}
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
}
