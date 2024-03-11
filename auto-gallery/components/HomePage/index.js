import Link from "next/link";
import SelectedCars from "../modules/SelectedCars";
import Style from "./index.module.css";

function HomePage() {
  return (
    <>
      <h1>home page</h1>
        <Link href={"./cars"}>
        <button className={Style.seeAllBtn}> See all cars</button>
      </Link>
      <SelectedCars />
    </>
  );
}

export default HomePage;
