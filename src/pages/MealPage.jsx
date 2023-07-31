import { Container } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from '../components/MealCard';
function MealPage() {
  const params = useParams();
  const [meal,setMeal] =useState({})
  const [isLoading,setIsLoading] = useState(false)
  useEffect(()=>{
    const fetchMealData = async ()=>{
      setIsLoading(true)
     const response = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      setMeal( response.data.meals[0])
      setIsLoading(false)
      }
      fetchMealData();
  },[])
  return (
    <div>
     <Container>
      <MealCard meal={meal} isLoading={isLoading}/>
     </Container> 
    </div>
  )
}

export default MealPage
