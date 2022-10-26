import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { click } from '@testing-library/user-event/dist/click';
import { filterFunction } from '../components/Form'

describe('Testa a Table', () => {
test('Confere se todos os campos de filtros estão na pagina.', () => {
  render(<App />);
  const nameFilter = screen.getByTestId("name-filter");
  const columnFilter = screen.getByTestId("column-filter");
  const comparisonFilter = screen.getByTestId("comparison-filter");
  const valueFilter = screen.getByTestId("value-filter");
  const buttonFilter = screen.getByTestId("button-filter");
  expect(nameFilter && columnFilter && comparisonFilter && valueFilter && buttonFilter).toBeInTheDocument();
});

test('Confere se ao pesquisar (ya) filtra os planetas', async () => {
  render(<App />);
  await new Promise((r) => setTimeout(r, 3000));
  const nameFilter = screen.getByTestId("name-filter");
  userEvent.type(nameFilter,'ya')
  const nameColumn = screen.getAllByTestId('planet-name');
  expect(nameColumn.length).toBe(1);
});

test('Confere se tabela principal está na tela', () => {
  render(<App />);
  const mainTable = screen.getByTestId("main-table");
  expect(mainTable).toBeInTheDocument();
});

test('Testa a seleção de coluna', async() => {
  render(<App />);
  await new Promise((r) => setTimeout(r, 2000));
  userEvent.selectOptions(screen.getByTestId("column-filter"),['population']);
  expect(screen.getByRole('option', {name: 'diameter'}).selected).toBe(false);
  userEvent.selectOptions(screen.getByTestId("comparison-filter"),['igual a']);
  expect(screen.getByRole('option', {name: 'menor que'}).selected).toBe(false)
  userEvent.type(screen.getByTestId('value-filter'),'1000');
  userEvent.click(screen.getByTestId('button-filter'));
  const nameColumn = screen.getAllByTestId('planet-name');
  expect(nameColumn.length).toBe(1);
  });

test('Testa o filtro maior que', async() => {
  render(<App />);
  await new Promise((r) => setTimeout(r, 2000));
  userEvent.selectOptions(screen.getByTestId("comparison-filter"),['maior que']);
  expect(screen.getByRole('option', {name: 'menor que'}).selected).toBe(false)
  userEvent.type(screen.getByTestId('value-filter'),'2000000000');
  userEvent.click(screen.getByTestId('button-filter'));
  const nameColumn = screen.getAllByTestId('planet-name');
  expect(nameColumn.length).toBe(2);
  });

  test('Testa o filtro menor que', async() => {
    render(<App />);
    await new Promise((r) => setTimeout(r, 2000));
    userEvent.selectOptions(screen.getByTestId("comparison-filter"),['menor que']);
    expect(screen.getByRole('option', {name: 'maior que'}).selected).toBe(false)
    userEvent.type(screen.getByTestId('value-filter'),'6000000');
    userEvent.click(screen.getByTestId('button-filter'));
    const nameColumn = screen.getAllByTestId('planet-name');
    expect(nameColumn.length).toBe(2);
    });
});


