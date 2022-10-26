import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

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
    column,
    comparison,
    valuefilter,
    setData,
    setFilteredData,
    handleSearch,
    handleColumn,
    handleComparison,
    handleValueFilter,
  }), [data, search, column, comparison, valuefilter, filteredData]);

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
