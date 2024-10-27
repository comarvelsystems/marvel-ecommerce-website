import Navbar from "@/components/navbar/Navbar";
import React from "react";

interface Props {
  children: Readonly<React.ReactNode>;
}

const RegisterLayout = ({ children }: Props) => {
  return (
    <div className='flex h-screen min-h-screen flex-col'>
      <Navbar />
      <section className='flex-1'>
        <section className='flex h-full'>
          <section className='flex-1 bg-muted px-4 py-6 md:p-10'>
            {children}
          </section>
        </section>
      </section>
      <footer className='h-14 flex-none border-t border-border/70 bg-background'></footer>
    </div>
  );
};

export default RegisterLayout;
