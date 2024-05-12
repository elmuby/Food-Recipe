import react from "react";

export const MealCard = ({meal}) =>{
  return (
    <div key={meal.idMeal} className="border border-gray-300 rounded p-4">
      <h3 className="font-bold">{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="mb-2" />
      <p>
        <span className="font-bold">Instructions </span>
        {meal.strInstructions}
      </p>
      <p>
        <span className="font-bold"> Category</span>
        {meal.strCategory}
      </p>

    </div>
  )
}