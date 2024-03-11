import CarDetails from "@/components/templates/CarDetails";
import { useRouter } from "next/router";
import data from "../../data/carsData";

function Details() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = data[carId - 1];
  return <CarDetails {...carDetail} />;
}

export default Details;
