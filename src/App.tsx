import React, { Suspense } from 'react';
import Navbar from './components/navbar';
import routes from './router';
import { useRoutes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
