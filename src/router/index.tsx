// 导入路由组件
// 导入路由管理工具
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const Tools = lazy(() => import('@/pages/tools'));
const Jsonfmt = lazy(() => import('@/pages/tools/text/json'));
const TextTools = lazy(() => import('@/pages/tools/text'));
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
    element: <Tools />,
    children: [
      {
        path: '/tools/text',
        element: <TextTools />,
        children: [
          {
            path: '/tools/text/jsonfmt',
            element: <Jsonfmt />
          }
        ]
      },
      {
        path: '/tools/text/jsonfmt',
        element: <Jsonfmt />
      }
    ]
  }
];

export default routes;
