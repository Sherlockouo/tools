import { createContext } from 'react';
import { createDefaultState } from '@/store';

export interface LocalState {
  jsonString: string;
  value: object;
}

export const defaultState = createDefaultState<LocalState>({
  jsonString: '{}',
  value: {}
});

export const StateContext = createContext(defaultState);
