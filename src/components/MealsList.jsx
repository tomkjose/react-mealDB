import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../styles/index.css"
import { Link } from 'react-router-dom';
function MealsList({mealsList}) {
  return (
    <div className='meals-card'>
     {mealsList.map((meal)=>{
       return <Card sx={{ maxWidth: 345 ,minWidth:345}} key={meal.idMeal}>
       <CardActionArea>
         <CardMedia
           component="img"
           height="140"
           image={meal.strMealThumb}
           alt={meal.strMeal}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
           {meal.strMeal}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="primary">
          <Link to={`/meals/${meal.idMeal}` }> Explore </Link>
         </Button>
       </CardActions>
     </Card>
     })}  
    </div>
  )
}

export default MealsList
