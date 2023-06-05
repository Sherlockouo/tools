import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from './router';
import Navbar from './components/navbar';
import BackGround from './components/background';
import style from './style.module.scss';
import Footer from './components/footer';
import Container from './components/container';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <BackGround />
      <Suspense fallback={<div className="main"> </div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
