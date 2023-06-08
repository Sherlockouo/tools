// 导入路由组件
// 导入路由管理工具
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Jsonfmt = lazy(() => import('@/pages/tools/text/json'));
const TextTools = lazy(() => import('@/pages/tools/text'));
const routes: RouteObject[] = [
  {
    path: '/text',
    element: <TextTools />
  },
  {
    path: '/text/jsonfmt',
    element: <Jsonfmt />
  }
];

export default routes;
