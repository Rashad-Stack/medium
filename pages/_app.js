import "tailwindcss/tailwind.css";
import { Layout } from "../components";
import { MediumContextProvider } from "../context/MediumContext";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <MediumContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediumContextProvider>
  );
}

export default MyApp;
