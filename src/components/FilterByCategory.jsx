import { useContext } from 'react';
import { MovieContext, MovieUpdateContext } from '../MoviesContext';

const FilterByCategory = () => {
  const categories = [
    ...new Set(useContext(MovieContext).movies.map((mv) => mv.category)),
  ];
  const { filterByCat, searchByInput } = useContext(MovieUpdateContext);
  return (
    <div>
      <form>
        <label htmlFor='search'>Search</label>
        <input type='text' id='search' onChange={(e) => searchByInput(e.target.value)} />
      </form>
      <select onChange={(e) => filterByCat(e.target.value)}>
        <option value=''>All</option>
        {categories?.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
