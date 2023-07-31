import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../styles/index.css"
function PageNumber({totalPages,onPageChange}) {
 
    const handlePageChange = (event, page) => {
      onPageChange(page);
    };
  
  return (
    <div className='page-number'>
        <Stack spacing={2}>
      <Pagination count={totalPages} color="primary" onChange={handlePageChange} /> 
      </Stack>
    </div>
  )
}

export default PageNumber
