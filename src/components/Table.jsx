import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const {
    // data,
    search, screenFilteredData } = useContext(AppContext);
  return (
    <table data-testid="main-table">
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        { screenFilteredData.filter(
          (e) => e.name.toLowerCase().includes(search.toLowerCase()),
        )
          .map((e) => (
            <tr key={ e.name }>
              <td data-testid="planet-name">
                { e.name }
              </td>

              <td>
                { e.rotation_period }
              </td>

              <td>
                { e.orbital_period }
              </td>

              <td>
                { e.diameter }
              </td>

              <td>
                { e.climate }
              </td>

              <td>
                { e.gravity }
              </td>

              <td>
                { e.terrain }
              </td>

              <td>
                { e.surface_water }
              </td>

              <td>
                { e.population }
              </td>

              <td>
                { e.films }
              </td>

              <td>
                { e.created }
              </td>

              <td>
                { e.edited }
              </td>

              <td>
                { e.url }
              </td>

            </tr>
          ))}
      </tbody>
    </table>
  );
}
