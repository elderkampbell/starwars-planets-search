import React from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Form />
      <Table />
      <span>Hello, App!</span>
    </AppProvider>
  );
}

export default App;
