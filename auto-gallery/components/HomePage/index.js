import { useContext } from "react";
import Style from "./index.module.css";
import DataContext from "@/context/dataContext";
import Location from "../icons/Location";
import CarContainer from "../templates/CarContainer";
import SelectedCars from "../modules/SelectedCars";

function HomePage() {
  return (
    <>
      <h1>home page</h1>

      <SelectedCars />
    </>
  );
}

export default HomePage;
