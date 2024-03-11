import DataContext from "@/context/dataContext";
import { useContext, useState } from "react";
import Style from "./index.module.css";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const { data } = useContext(DataContext);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  function handleSearch() {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please enter min & max prices!");
    }
  }

  return (
    <div className={Style.container}>
      <div>
        <input
          type="number"
          placeholder="Enter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      {/* <Link href={"/slug"}> */}
      <button onClick={handleSearch}>Search</button>
      {/* </Link> */}
    </div>
  );
}
export default SearchBar;
