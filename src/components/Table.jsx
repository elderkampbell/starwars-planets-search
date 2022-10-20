import React, { useState, useEffect } from 'react';

export default function Form() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const GetApi = async () => {
      const URL = 'https://swapi.dev/api/planets';
      const response = await fetch(URL).then((array) => array.json());
      const { results } = response;
      setData(results);
    };
    GetApi();
  }, []);

  return (
    <table>
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
        { data.map((e) => (
          <tr key={ e.name }>
            <td>
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
