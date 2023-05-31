import React, { memo } from 'react';
import style from './style.module.scss';
import { observer, useLocalObservable } from 'mobx-react';
import { defaultState, StateContext } from './state';
import { useEffect } from 'react';
import { getArticleList } from '@/service/home';

const Home = observer(() => {
  const state = useLocalObservable(() => defaultState);

  const getArticle = async () => {
    const articleList = await getArticleList(0, 5);
    state.setProps({
      articleList
    });
  };

  useEffect(() => {
    void getArticle();
  }, []);

  return (
    <div className={style.root}>
      <StateContext.Provider value={state}>
        <div className="container">
          <h3 className="center"> Home页面</h3>
          <p>欢迎来到首页</p>
          <h1>{state.count}</h1>
          <button
            onClick={() => {
              state.setProps({
                count: state.count + 1
              });
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              state.setProps({
                count: state.count - 1
              });
            }}
          >
            -1
          </button>
        </div>

        <ul>
          {state.articleList.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </StateContext.Provider>
    </div>
  );
});

export default Home;
