import Header from "../Header";
import styles from "./index.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
