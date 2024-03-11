import Link from "next/link";
import SelectedCars from "../../modules/SelectedCars";
import Style from "./index.module.css";
import SearchBar from "@/components/modules/SearchBar";

function HomePage() {
  return (
    <>
      <SearchBar />
      <Link href={"./cars"}>
        <button className={Style.seeAllBtn}> See all cars</button>
      </Link>
      <SelectedCars />
    </>
  );
}

export default HomePage;
