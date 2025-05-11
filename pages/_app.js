import { MainLayout } from "../src/components/layout/MainLayout";
import "../styles/globals.css";
import "../styles/genaral.sass";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
