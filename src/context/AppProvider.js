import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const columnsArray = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valuefilter, setValueFilter] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  const handleColumn = ({ target }) => {
    const { value } = target;
    setColumn(value);
  };
  const handleComparison = ({ target }) => {
    const { value } = target;
    setComparison(value);
  };
  const handleValueFilter = ({ target }) => {
    const { value } = target;
    setValueFilter(value);
  };

  useEffect(() => {
    const GetApi = async () => {
      const URL = 'https://swapi.dev/api/planets';
      const response = await fetch(URL).then((array) => array.json());
      const { results } = response;
      setData(results);
    };
    GetApi();
  }, []);

  const globalContext = useMemo(() => ({
    data,
    filteredData,
    search,
    columnsArray,
    column,
    comparison,
    valuefilter,
    setData,
    handleSearch,
    handleColumn,
    handleComparison,
    handleValueFilter,
  }), [data, search, column, comparison, valuefilter]);

  return (
    <AppContext.Provider value={ globalContext }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
