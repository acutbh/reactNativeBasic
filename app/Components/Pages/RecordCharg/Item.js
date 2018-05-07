import React, {Component} from 'react';
import {
} from 'react-native';

import * as Style from './style';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Style.Item index={this.props.index}>
        <Style.Head>
          <Style.Date>{this.props.data.date}</Style.Date>
        </Style.Head>
        <Style.Main>[充电{this.props.data.kwh}度] {this.props.data.remark||'暂无备注'}</Style.Main>
      </Style.Item>
    );
  }
}