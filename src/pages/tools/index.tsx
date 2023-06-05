import React, { memo } from 'react';
import style from './style.module.scss';
import { observer, useLocalObservable } from 'mobx-react';
import { defaultState, StateContext } from './state';
import { useEffect } from 'react';

const Tools = observer(() => {
  const state = useLocalObservable(() => defaultState);

  return (
    <div className={style.tools}>
      <StateContext.Provider value={state}>
        <span>tools collection</span>
      </StateContext.Provider>
    </div>
  );
});

export default Tools;
