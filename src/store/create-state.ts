import type { AnnotationsMap } from 'mobx';
import { useLocalObservable } from 'mobx-react';

/**
 * @description 我们扩展了setProps的方法，需要传一个回调函数，会在action里面执行setProps，达到深度修改状态
 */
type SetPropsFunc<T> = (props: Partial<T>) => void;
type SetPropsFuncCb<T> = (cb: (props?: Partial<T>) => void) => void;
// 在这里对useLocalObservable做扩展
interface StateExpend<T> {
  setProps: SetPropsFunc<T> & SetPropsFuncCb<T>;
}
/**
 * @description 使用此方法替代mobx-react的useLocalObservable
 * @param state useLocalObservable的state
 * @param annotations useLocalObservable的annotations
 * @returns 返回扩展后的Oberservable对象
 */
export const useLocalObservableWrap = <T extends Record<string, any>>(
  state: T,
  annotations?: AnnotationsMap<T, never>
) => {
  return useLocalObservable<T & StateExpend<T>>(() => {
    return {
      ...state,
      setProps(props) {
        // 当以回调方式形式传入时会直接执行函数，也就代表可以再回调函数里面执行深层修改属性
        if (typeof props === 'function') {
          (props as Parameters<SetPropsFuncCb<T>>[0])();
        } else {
          Object.assign(this, props);
        }
      }
    };
  }, annotations);
};

export const createDefaultState = <T extends Record<string, any>>(
  state: T
): T & StateExpend<T> => {
  return {
    ...state,
    setProps(props) {
      if (typeof props === 'function') {
        (props as Parameters<SetPropsFuncCb<T>>[0])();
      } else {
        Object.assign(this, props);
      }
    }
  };
};
