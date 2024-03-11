import DataContext from "@/context/dataContext";
import { useContext, useState } from "react";
import Style from "./index.module.css";

function SearchBar() {
  const { data } = useContext(DataContext);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  function handleSearch() {
    const filtered = data.filter(
      (item) => item.price > min && item.price < max
    );
    console.log(filtered);
  }

  return (
    <div className={Style.container}>
      <div>
        <input
          placeholder="Enter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Enter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default SearchBar;
