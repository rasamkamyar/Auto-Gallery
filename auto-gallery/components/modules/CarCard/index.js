import Location from "@/components/icons/Location";
import Style from "./index.module.css";
import Link from "next/link";

function CarCard(props) {
  const { id, name, model, image, year, distance, price, location } = props;
  return (
    <Link href={`/cars/${id}`}>
      <div className={Style.container}>
        <img src={image} className={Style.image} />
        <h1 className={Style.title}>
          {name} {model}
        </h1>{" "}
        <p className={Style.detail}>
          {year} . {distance}km
        </p>
        <div className={Style.footer}>
          <h2 className={Style.price}> ${price} </h2>
          <div className={Style.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarCard;
