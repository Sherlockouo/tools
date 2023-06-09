import React, { memo } from 'react';
import style from './style.module.scss';
import { Image } from 'antd';
import Idea from '@/components/idea';
import Card from '@/components/card';
import Json from './json';
import Item from '@/components/item';
import ItemInfo from '@/components/iteminfo';
import Box from '@/components/box';
import Container from '@/components/container';

const TextTools = memo(() => {
  return (
    <div className={style.textTools}>
      <div className="container">
        {/* <p>TextTools页面！</p> */}
        <Container>
          <Box title="文本工具">
            <ItemInfo
              icon="#icon-json"
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
        </Container>
      </div>
    </div>
  );
});

export default TextTools;
