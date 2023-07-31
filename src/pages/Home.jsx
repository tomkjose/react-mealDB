import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import "../styles/index.css"
import CategoryList from '../components/CategoryList';
import axios from "axios"
import PageNumber from '../components/PageNumber';
import Loading from "../components/Loading"
function Home() {
    const [isLoading,setLoading] = useState(false);
    const [categories,setCategories] = useState([]);
    const [totalPages,setTotalPages]=useState(1);
    const [pageNumber,setPageNumber]= useState(1); 

   useEffect(()=>{
    const fetchCatogory = async()=>{
        setLoading(true);
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories( response.data.categories)
        setTotalPages(Math.ceil(response.data.categories.length/6))
        setLoading(false);
      }
     fetchCatogory();
    
   },[])
   const itemsPerPage = 6 ;
   const lastElement = pageNumber*itemsPerPage;
   const firstElement = lastElement-itemsPerPage;
  
   const category = categories.slice(firstElement,lastElement);
   console.log('firstElement', firstElement)
   console.log('firstElement', lastElement)
 
   
   const handlePageClick= (index)=>{
    setPageNumber(index)
   }
  return (
    <div>
     <Container>
     {!isLoading?   <div className='homeContainer'>
        <CategoryList categories={category}/>  
        <PageNumber totalPages={totalPages} onPageChange={handlePageClick}/>
        </div>:<Loading/>}
     </Container> 
    </div>
  )
}

export default Home
