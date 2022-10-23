import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const {
    handleSearch,
    search,
    columnsArray,
    column,
    handleColumn,
    comparison,
    handleComparison,
    valuefilter,
    handleValueFilter,
  } = useContext(AppContext);

  const filterFunction = () => {
    console.log(column);
    console.log(comparison);
    console.log(valuefilter);
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
        { columnsArray.map((e) => <option value={ e } key={ e }>{ e }</option>)}
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
        value="Buscar"
        data-testid="button-filter"
        onClick={ filterFunction }
      />
    </div>
  );
}
