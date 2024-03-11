import { useState } from "react";
import Style from "./index.module.css";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default SearchBar;
