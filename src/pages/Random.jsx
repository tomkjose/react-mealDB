import React, { useState,useEffect } from 'react'
import { Container } from '@mui/material'
import MealCard from '../components/MealCard'
import axios from "axios"
function Random() {
  const [meal,setMeal] =useState({})
  useEffect(()=>{
    const fetchMealData = async ()=>{
     const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      console.log('response.data', response.data.meals[0])
      setMeal( response.data.meals[0])
      }
      fetchMealData();
  },[])
  return (
    <div>
       <Container>
        <MealCard meal={meal}/>
     </Container>  
    </div>
  )
}

export default Random
