import Navbar from "@/components/navbar/Navbar";
import AccountSidebar from "@/features/account/AccountSidebar";

interface Props {
  children: Readonly<React.ReactNode>;
}

const AccountLayout = ({ children }: Props) => {
  return (
    <div className='flex h-screen min-h-screen flex-col'>
      <Navbar />
      <section className='flex-1'>
        <section className='flex h-full'>
          <AccountSidebar />
          <section className='flex-1 bg-muted p-4 md:p-10'>{children}</section>
        </section>
      </section>
      <footer className='h-14 flex-none border-t border-border/70 bg-background'></footer>
    </div>
  );
};

export default AccountLayout;
