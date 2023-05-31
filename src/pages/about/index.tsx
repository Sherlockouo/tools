import React, { memo } from 'react';
import style from './style.module.scss';

const About = memo(() => {
  return (
    <div className={style.root}>
      <div className="container">
        <h3 className="center"> About页面</h3>
        <p>欢迎来到关于我们页面！</p>
      </div>
    </div>
  );
});

export default About;
