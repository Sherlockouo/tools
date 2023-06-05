import React, { memo } from 'react';
import style from './style.module.scss';
import { observer, useLocalObservable } from 'mobx-react';
import { defaultState, StateContext } from './state';
import { useEffect } from 'react';
import Container from '@/components/container';
import Box from '@/components/box';

const Tools = observer(() => {
  const state = useLocalObservable(() => defaultState);

  return (
    <div className={style.tools}>
      <p> 一些常用工具 </p>
      <StateContext.Provider value={state}>
        <Container>
          <Box title="1">
            <div className="aaa">daohang</div>
            <div className="aaa">daohang</div>
            <div className="aaa">daohang</div>
          </Box>
          <Box title="2">一些导航链接</Box>
          <Box title="3">一些导航链接</Box>
        </Container>
      </StateContext.Provider>
    </div>
  );
});

export default Tools;
