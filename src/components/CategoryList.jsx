import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../styles/index.css"
import { Link } from 'react-router-dom';
function CategoryList({categories}) {
  return (
    <div className='category-card'>
     {categories.map((category)=>{
       return <Card sx={{ maxWidth: 345 }} key={category.idCategory}>
       <CardActionArea>
         <CardMedia
           component="img"
           height="140"
           image={category.strCategoryThumb}
           alt={category.strCategory}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
           {category.strCategory}
           </Typography>
           <Typography variant="body2" color="text.secondary">
           { category.strCategoryDescription.substr(0, 100) + '...'}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="primary">
          <Link to={`categories/${category.strCategory}` }> Explore </Link>
         </Button>
       </CardActions>
     </Card>
     })}
    </div>
  )
}

export default CategoryList
