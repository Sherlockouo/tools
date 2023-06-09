import React, { memo } from 'react';
import style from './style.module.scss';
import { Image } from 'antd';
import Idea from '@/components/idea';
import Card from '@/components/card';

const Hot = memo(() => {
  return (
    <div className={style.hot}>
      <div className="container">
        <p>关于我们页面！</p>
        {/* 开发者信息 */}
        <div className="devloper-info">
          <p>开发者信息</p>
          <div className="devloper">
            <Card
              name="周杰伦"
              skills={['a', 'b', 'c']}
              avatar="https://w.wallhaven.cc/full/zy/wallhaven-zyoj2v.png"
              hobby={['摄影', '健身', '游泳']}
            ></Card>
          </div>
          <div className="devloper">
            <div className="avatar">
              <Image
                preview={false}
                src="https://w.wallhaven.cc/full/zy/wallhaven-zyoj2v.png"
              />
            </div>
            <div className="desc">
              <div className="name">周杰伦</div>
              <div className="hobby">风光摄影,街头摄影</div>
              <div className="skills">c++,java,golang,react,vue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hot;
