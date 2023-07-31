import React from 'react'
import "../styles/meals.css"
function MealCard({meal}) {
  return (
    <div className='meal-container'>
       <div className='meals-image-container'>
        <img src={meal.strMealThumb} alt={meal.strMeal}  className='meals-image' style={{width:"100%"}}/>
       </div>
       <div className='meals-instruction-container'>
         <h2 className='meals-title'>{meal.strMeal}</h2>
         <p className='meals-category'>{meal.strCategory}</p>
         <p className='meals-instruction'>{meal.strInstructions}</p>
         <p className='meals-tags'>Tags: {meal.strTags}</p>
       </div>
    </div>
  )
}

export default MealCard
