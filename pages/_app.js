import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
