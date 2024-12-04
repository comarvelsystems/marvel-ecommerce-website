import { Footer, Header } from "@/components";

interface Props {
  children: Readonly<React.ReactNode>;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
