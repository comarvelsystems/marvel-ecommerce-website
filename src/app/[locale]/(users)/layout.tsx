import Navbar from "@/components/navbar/Navbar";

interface Props {
  children: Readonly<React.ReactNode>;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <footer className='mt-10 h-80 bg-muted'></footer>
    </>
  );
};

export default layout;
