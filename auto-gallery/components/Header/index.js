import Link from "next/link";
import Style from "./index.module.css";

function Header() {
  return (
    <Link href="/">
      <div className={Style.container}>
        <h1 className={Style.title}>AUTO GALLERY</h1>
        <p>Choose and buy your car</p>
      </div>
    </Link>
  );
}

export default Header;
