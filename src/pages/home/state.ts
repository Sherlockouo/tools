import { createContext } from 'react';
import { createDefaultState } from '@/store';

type Label = {
  id: number;
  name: string;
  color: string;
};

interface Article {
  id: number;
  title: string;
  titleImg: string;
  description: string;
  viewTimes: number;
  createTime: string;
  updateTime: string;
  total: number;
  commentNum: number;
  labels: Array<Label>;
}

export interface LocalState {
  count: number;
  articleList: Article[];
}

export const defaultState = createDefaultState<LocalState>({
  count: 100,
  articleList: []
});

export const StateContext = createContext(defaultState);
