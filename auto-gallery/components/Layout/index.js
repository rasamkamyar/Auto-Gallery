import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
