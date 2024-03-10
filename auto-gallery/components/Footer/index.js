import Style from "./index.module.css";

function Footer() {
  return (
    <h1 className={Style.footer}>
      {" "}
      <a href="/" target="_blank">
        {" "}
        Auto gallery website{" "}
      </a>{" "}
      | Next project ©
    </h1>
  );
}
export default Footer;
