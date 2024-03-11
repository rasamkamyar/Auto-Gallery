import SearchBar from "@/components/modules/SearchBar";
import CarContainer from "@/components/templates/CarContainer";
import DataContext from "@/context/dataContext";
import { useRouter } from "next/router";
import { useContext } from "react";

function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  console.log(min, max);
  const { data } = useContext(DataContext);

  const filtered = data.filter((item) => item.price > min && item.price < max);
  console.log(filtered);
  // if (!filtered.length) return <h1>Not found car</h1>;

  return (
    <div>
      <CarContainer data={filtered} />
    </div>
  );
}

export default FilterCars;
