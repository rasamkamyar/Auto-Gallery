import CarDetails from "@/components/templates/CarDetails";
import DataContext from "@/context/dataContext";
import { useRouter } from "next/router";
import { useContext } from "react";

function Details() {
  const { data } = useContext(DataContext);
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = data[carId - 1];
  return <CarDetails {...carDetail} />;
}

export default Details;
