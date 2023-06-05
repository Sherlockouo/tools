// 导入路由组件
// 导入路由管理工具
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const Tools = lazy(() => import('@/pages/tools'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/tools',
    element: <Tools />
  }
];

export default routes;
