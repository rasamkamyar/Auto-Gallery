import Style from "./index.module.css";

function Header() {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>AUTO GALLERY</h1>
      <p>Choose and buy your car</p>
    </div>
  );
}

export default Header;
