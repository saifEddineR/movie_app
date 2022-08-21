import React, { useState, useContext } from 'react';
import { MovieContext } from './MoviesContext';

export const PaginationContext = React.createContext();

const pageSize = 6;
export const PaginationProvider = ({ children }) => {
  const { movies } = useContext(MovieContext);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const handlePagination = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from, to });
    console.log(from, to);
  };
  const updatePaginationCount = (count) => {
    setPagination({ ...pagination, count });
  };
  return (
    <PaginationContext.Provider
      value={{ pagination, handlePagination, updatePaginationCount }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
