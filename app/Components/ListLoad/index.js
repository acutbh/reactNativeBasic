import React, { Component } from 'react';
import {
  View
} from 'react-native'

import * as Style from './style';

export default class TabIcon extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Style.Wrap>
        {this.props.state?<Style.LoadIndicator color={Style.Basic.ashGray} size='small'></Style.LoadIndicator>:null}
        <Style.StateText>{this.props.state?'加载中...':'－ 没有更多了哦 －'}</Style.StateText>
      </Style.Wrap>
    )
  }
};