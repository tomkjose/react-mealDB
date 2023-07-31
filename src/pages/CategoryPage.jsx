import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import MealsList from '../components/MealsList';
import { Container } from '@mui/material';
import PageNumber from '../components/PageNumber';
function CategoryPage() {
    const [mealsList,setMealList]=useState([]);
    const [totalPages,setTotalPages]=useState(1);
    const [pageNumber,setPageNumber]= useState(1); 
    const params =useParams();
 useEffect(()=>{
  const catorgoryMeals = async()=>{
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
    setMealList(response.data.meals)
    setTotalPages(Math.ceil(response.data.meals.length/6))
}
catorgoryMeals();
 },[])
 const itemsPerPage = 6 ;
 const lastElement = pageNumber*itemsPerPage;
 const firstElement = lastElement-itemsPerPage;

 const mealData = mealsList.slice(firstElement,lastElement);
 console.log('firstElement', firstElement)
 console.log('firstElement', lastElement)
 console.log('mealData', mealData)

 
 const handlePageClick= (index)=>{
  setPageNumber(index)
 }

  return (
    <Container>
      <MealsList mealsList={mealData} />
      <PageNumber totalPages={totalPages} onPageChange={handlePageClick}/>
      </Container>
  )
}

export default CategoryPage
