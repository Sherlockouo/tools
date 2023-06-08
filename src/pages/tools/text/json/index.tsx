import React, { memo, useState } from 'react';
import style from './style.module.scss';
import { observer, useLocalObservable } from 'mobx-react';
import { defaultState, StateContext } from './state';
import { useEffect } from 'react';
import { getArticleList } from '@/service/home';
import Container from '@/components/container';
import Box from '@/components/box';
import Item from '@/components/item';
import { JsonViewer } from '@textea/json-viewer';
import { Input } from 'antd';
import { message } from 'antd';

const { TextArea } = Input;

const Json = observer(() => {
  const state = useLocalObservable(() => defaultState);
  const [inputValue, setInputValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    try {
      const data = JSON.parse(e.target.value);
      setInputValue(JSON.stringify(data, null, 2));

      state.setProps({
        value: data
      });
    } catch (error) {
      // message.warning(error.message);
    }
  };
  console.log('shit');

  return (
    <div className={style.json}>
      <StateContext.Provider value={state}>
        <Container className="json-container">
          <Item
            name="Json"
            desc="Json 格式化"
            icon="icon-json1"
            className="json-input"
          >
            <TextArea
              showCount
              onChange={onChange}
              value={inputValue}
              placeholder="input json string"
            />
          </Item>
          <Item
            name="Json"
            desc="Json 格式化"
            icon="icon-json1"
            className="json-output"
          >
            <JsonViewer value={state.value} />
          </Item>
        </Container>
      </StateContext.Provider>
    </div>
  );
});

export default Json;
