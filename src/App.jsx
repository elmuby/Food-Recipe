import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { MealCard } from "./MealCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  // use useEffect hook for api call
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        setResult(response.data.meals);
        console.log(result);
      } catch (e) {
        console.log("error feching", e);
      }
    };
    fetchMeal();
  }, [searchTerm]);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="container mx-auto p-4">
      {/* < MealCard/> */}
      <h1 className="font-bold">Meal Search Engine</h1>
      <form>
        <input
          type="text"
          placeholder="Search for a meal"
          value={searchTerm}
          onChange={handleSearchTerm}
          className="rounded border border-gray-300 py-2 px-4"
        />
      </form>
      {/* {Meal card} */}
      <div className="grid grid-cols-3 gap-4">
        {result?.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default App;
