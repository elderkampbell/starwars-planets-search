import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { click } from '@testing-library/user-event/dist/click';

test('Confere se todos os campos de filtros estão na pagina.', () => {
  render(<App />);
  const nameFilter = screen.getByTestId("name-filter");
  const columnFilter = screen.getByTestId("column-filter");
  const comparisonFilter = screen.getByTestId("comparison-filter");
  const valueFilter = screen.getByTestId("value-filter");
  const buttonFilter = screen.getByTestId("button-filter");
  expect(nameFilter && columnFilter && comparisonFilter && valueFilter && buttonFilter).toBeInTheDocument();
});
test('Confere se tabela principal está na tela', () => {
  render(<App />);
  const nameFilter = screen.getByTestId("name-filter");
  userEvent.type(nameFilter,'ya')
  expect(filter).toHaveBeenCalled();
});
test('Confere se tabela principal está na tela', () => {
  render(<App />);
  const mainTable = screen.getByTestId("main-table");
  expect(mainTable).toBeInTheDocument();
});
