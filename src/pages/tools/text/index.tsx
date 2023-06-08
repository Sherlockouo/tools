import React, { memo } from 'react';
import style from './style.module.scss';
import { Image } from 'antd';
import Idea from '@/components/idea';
import Card from '@/components/card';
import Json from './json';
import Item from '@/components/item';
import ItemInfo from '@/components/iteminfo';

const TextTools = memo(() => {
  return (
    <div className={style.textTools}>
      <div className="container">
        <p>TextTools页面！</p>
        <ItemInfo
          icon="#icon-book"
          className="text"
          desc="text tools"
          name="textTools"
          href="/tools/text/jsonfmt"
        >
          {' '}
        </ItemInfo>
      </div>
    </div>
  );
});

export default TextTools;
