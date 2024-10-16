import Heading from "@/components/Heading";
import SecuritySettingsPasswordForm from "./SecuritySettingsPasswordForm";
import SecuritySettingsDeleteAccount from "./SecuritySettingsDeleteAccount";

const SecuritySettingsContainer = () => {
  return (
    <section className='space-y-8'>
      <header className='space-between flex flex-wrap gap-5 sm:flex-nowrap'>
        <div className='flex-1 space-y-1.5'>
          <Heading as='h1' className='!text-3xl'>
            Payments
          </Heading>
        </div>
      </header>
      <SecuritySettingsPasswordForm />
      <SecuritySettingsDeleteAccount />
    </section>
  );
};

export default SecuritySettingsContainer;
