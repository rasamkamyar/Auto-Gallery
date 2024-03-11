import DataContext from "@/context/dataContext";
import { useContext } from "react";
import Style from "./index.module.css";
import Location from "@/components/icons/Location";

function SelectedCars() {
  const { data } = useContext(DataContext);
  const selectedCar = data.slice(0, 3);

  return (
    <div className={Style.carsCard}>
      {selectedCar.map((item) => {
        return (
          <div key={item.id} className={Style.container}>
            <img src={item.image} className={Style.image} />
            <h1 className={Style.title}>
              {item.name} {item.model}
            </h1>{" "}
            <p className={Style.detail}>
              {item.year} . {item.distance}km
            </p>
            <div className={Style.footer}>
              <h2 className={Style.price}> ${item.price} </h2>
              <div className={Style.location}>
                <p>{item.location}</p>
                <Location />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SelectedCars;
