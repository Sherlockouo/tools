import React, { memo, Suspense } from 'react';
import style from './style.module.scss';
import { observer, useLocalObservable } from 'mobx-react';
import { defaultState, StateContext } from './state';
import { useEffect } from 'react';
import Container from '@/components/container';
import Box from '@/components/box';
import TextTools from './text';
import { useRoutes } from 'react-router';
import routes from '@/router/tools';
import ItemInfo from '@/components/iteminfo';
import { useLocation } from 'react-router-dom';

const Tools = observer(() => {
  const state = useLocalObservable(() => defaultState);
  const location = useLocation();
  const index = () => {
    return (
      <div>
        <p> 一些常用工具 </p>
        <Container>
          <Box title="文本工具">
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
            <ItemInfo
              icon="#icon-book"
              className="text"
              desc="text tools"
              name="textTools"
              href="/tools/text/jsonfmt"
            >
              {' '}
            </ItemInfo>
          </Box>
          <Box title="数据工具"></Box>
        </Container>
      </div>
    );
  };
  return (
    <div className={style.tools}>
      {location.pathname == '/tools' && index()}
      <Suspense fallback={<div> </div>}>{useRoutes(routes)}</Suspense>
    </div>
  );
});

export default Tools;
