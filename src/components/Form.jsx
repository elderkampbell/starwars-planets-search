import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

export default function Form() {
  const columnsArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [array, setArray] = useState(columnsArray);

  const {
    data,
    // setData,
    handleSearch,
    search,
    column,
    setColumn,
    handleColumn,
    comparison,
    handleComparison,
    valuefilter,
    handleValueFilter,
    filtersData,
    setFiltersData,
    setScreenFilteredData,
  } = useContext(AppContext);

  const filterFunction = () => {
    const filters = {
      column,
      comparison,
      valuefilter,
    };
    setFiltersData((prev) => [...prev, filters]);
    setArray(array.filter((e) => e !== column));
  };

  useEffect(() => {
    let originalData = data;
    setColumn(array[0]);
    filtersData.forEach((f) => {
      const filteredData = originalData.filter((e) => {
        switch (f.comparison) {
        case 'maior que':
          return (Number(e[f.column]) > Number(f.valuefilter));
        case 'menor que':
          return (Number(e[f.column]) < Number(f.valuefilter));
        case 'igual a':
          return (Number(e[f.column]) === Number(f.valuefilter));
        default:
          return data;
        }
      });
      originalData = filteredData;
    });
    setScreenFilteredData(originalData);
  }, [filtersData, data, setScreenFilteredData, setColumn, array]);

  const clearAllFilters = () => {
    setFiltersData([]);
    setArray(columnsArray);
  };

  const clearFilter = (index, columnString) => {
    setFiltersData(filtersData.filter((_, i) => index !== i));
    setArray((prev) => [...prev, columnString]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca"
        data-testid="name-filter"
        value={ search }
        onChange={ handleSearch }
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ handleColumn }
      >
        { array.map((e) => <option value={ e } key={ e }>{ e }</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valuefilter }
        onChange={ handleValueFilter }
      />
      <input
        type="button"
        value="Filtrar"
        data-testid="button-filter"
        onClick={ filterFunction }
      />
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ clearAllFilters }
      >
        Limpar Filtros
      </button>

      {filtersData.map(
        (e, i) => (
          <div key={ e.column }>
            <button
              type="button"
              data-testid="filter"
              onClick={ () => clearFilter(i, e.column) }
            >
              X
            </button>
            { `${e.column} ${e.comparison} ${e.valuefilter}` }
          </div>),
      )}
    </div>
  );
}
