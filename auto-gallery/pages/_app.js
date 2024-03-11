import Layout from "@/components/Layout";
import DataContext from "@/context/dataContext";
import "@/styles/globals.css";
import data from "../data/carsData";

export default function App({ Component, pageProps }) {
  return (
    <DataContext.Provider value={{ data }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContext.Provider>
  );
}
