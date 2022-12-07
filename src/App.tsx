import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';

export const App: React.FC = () => {
  return (
    <div className="body">
      <Routes>
        <Route
          path="/form"
          element={<Form />}
        />
        <Route
          path="/table"
          element={<Table />}
        />
        <Route
          path="*"
          element={<Table />}
        />
      </Routes>
    </div>
  );
};
