import CarCard from "@/components/modules/CarCard";
import Data from "../../../data/carsData";
import Style from "./index.module.css";

function CarContainer() {
  return (
    <div className={Style.container}>
      {Data.map((car) => (
        <CarCard key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarContainer;
