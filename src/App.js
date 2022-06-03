import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
