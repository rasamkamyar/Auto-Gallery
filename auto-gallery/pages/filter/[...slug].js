import CarCard from "@/components/modules/CarCard";
import { useRouter } from "next/router";
import data from "../../data/carsData";

function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filtered = data.filter((item) => item.price > min && item.price < max);

  if (!filtered.length)
    return (
      <h1 style={{ textAlign: "center", marginTop: "200px", color: "gray" }}>
        Not found car
      </h1>
    );

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {filtered.map((item) => {
        return <CarCard {...item} />;
      })}
    </div>
  );
}

export default FilterCars;
