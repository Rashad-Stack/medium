import Banner from "./Banner";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Banner />
      <main className="container max-w-screen-2xl mx-auto px-10">
        {children}
      </main>
    </>
  );
};

export default Layout;
