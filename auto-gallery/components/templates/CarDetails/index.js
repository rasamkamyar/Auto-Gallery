import styles from "./index.module.css";
import Company from "@/components/icons/Company";
import Location from "@/components/icons/Location";
import Model from "@/components/icons/Model";
import Money from "@/components/icons/Money";
import Road from "@/components/icons/Road";
import Calender from "@/components/icons/Calender";

function CarDetails(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} className={styles.image} />
      <h3 className={styles.header}>
        {props.name} {props.model}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{props.name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{props.model}</span>
        </div>
        <div>
          <Calender />
          <p>First registration</p>
          <span>{props.year}</span>
        </div>
        <div>
          <Road />
          <p>kms driven</p>
          <span>{props.distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{props.location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{props.description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price:</p>
          <span>{props.price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetails;
