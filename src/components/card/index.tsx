import React, { Component } from 'react';
import style from './style.module.scss';
import { Image } from 'antd';

type Props = {
  children?: React.ReactNode;
  avatar?: string;
  name?: string;
  hobby?: Array<string>;
  skills?: Array<string>;
};

export default class Card extends Component<Props> {
  render() {
    return (
      <div className={style.card}>
        <div className="avatar">
          <Image preview={false} src={this.props?.avatar} />
        </div>
        <div className="desc">
          <div className="name">{this.props?.name}</div>
          <div className="hobby">
            {this.props.hobby?.map((hobby) => (
              <span key={'hobby-' + hobby}>{hobby} </span>
            ))}
          </div>
          <div className="skills">
            {this.props.skills?.map((skill) => (
              <span key={'skills-' + skill}>{skill} </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
