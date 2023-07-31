import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import '../styles/index.css'
function Loading() {
    const repeatNumber = 6;
  return (

    <div  className='loadingContainer'>
{  Array.from({ length: repeatNumber }, (_, index) => (
   

        <Card sx={{ maxWidth: 345, m: 2 ,width:'33%'}} key={index} >
    <CardContent>
       <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
           <Skeleton
             animation="wave"
             height={10}
             width="80%"
             style={{ marginBottom: 6 }}
           />
           <Skeleton animation="wave" height={10} width="40%" />
      </CardContent>
     <CardContent>

         <React.Fragment>
           <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
           <Skeleton animation="wave" height={10} width="80%" />
         </React.Fragment>
     </CardContent>
   </Card>
     ))
    }
    </div>
  )
}

export default Loading
