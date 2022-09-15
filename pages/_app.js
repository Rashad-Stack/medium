import { MediumContextProvider } from "../context/MediumContext";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <MediumContextProvider>
      <Component {...pageProps} />
    </MediumContextProvider>
  );
}

export default MyApp;
