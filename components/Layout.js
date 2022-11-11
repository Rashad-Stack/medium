import { useState } from "react";
import Banner from "./Banner";
import Header from "./Header";
const Layout = ({ children }) => {
  const [bannerHeight, setBannerHeight] = useState();
  return (
    <>
      <Header bannerHeight={bannerHeight} />
      <Banner setBannerHeight={setBannerHeight} />
      <main className="container max-w-screen-xl mx-auto px-10">
        {children}
      </main>
    </>
  );
};

export default Layout;
