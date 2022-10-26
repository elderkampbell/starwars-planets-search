import { useContext, useState } from 'react';
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
    setData,
    handleSearch,
    search,
    column,
    handleColumn,
    comparison,
    handleComparison,
    valuefilter,
    handleValueFilter,
  } = useContext(AppContext);

  const filterFunction = () => {
    const filteredData = data.filter((e) => {
      switch (comparison) {
      case 'maior que':
        return (Number(e[column]) > Number(valuefilter));
      case 'menor que':
        return (Number(e[column]) < Number(valuefilter));
      case 'igual a':
        return (Number(e[column]) === Number(valuefilter));
      default:
        return data;
      }
    });

    setArray(array.filter((e) => e !== column));
    setData(filteredData);
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
    </div>
  );
}
