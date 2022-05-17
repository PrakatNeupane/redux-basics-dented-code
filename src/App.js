import { useState } from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { Container } from './components/tableContainer/Container';

function App() {
  return (
    <div className="App">
      <h1>Counter app without redux</h1>
      <Container ></Container>
      <Form ></Form>
    </div>
  );
}

export default App;
