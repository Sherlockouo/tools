import React, { memo } from 'react';
import style from './style.module.scss';
import { observer, useLocalObservable } from 'mobx-react';
import { defaultState, StateContext } from './state';
import { useEffect } from 'react';
import { getArticleList } from '@/service/home';
import Container from '@/components/container';
import Box from '@/components/box';

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
    <div className={style.home}>
      <StateContext.Provider value={state}>
        <div className="container">
          <h3 className="center"> Home页面</h3>
          <p>欢迎来到首页</p>
          <Container>
            <Box>一些导航链接</Box>
            <Box>halo</Box>
            <Box>halo</Box>
            <Box>halo</Box>
          </Container>
        </div>
      </StateContext.Provider>
    </div>
  );
});

export default Home;
