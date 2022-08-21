import { useContext, useEffect } from 'react';
import { Box, Pagination } from '@mui/material';
import './pagination.css';
import { PaginationContext } from '../../PaginationContext';

const pageSize = 6;
export default function AppPagination({ moviesCount }) {
  const { pagination, handlePagination, updatePaginationCount } =
    useContext(PaginationContext);
  // console.log('paginationapp', pagination);
  useEffect(() => {
    updatePaginationCount(moviesCount);
  }, []);
  return (
    <Box
      justifyContent={'center'}
      alignItems='center'
      display={'flex'}
      color='white'
      sx={{
        margin: '20px 0px',
      }}
    >
      <Pagination
        style={{ color: 'white' }}
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePagination}
        color='primary'
      />
    </Box>
  );
}
