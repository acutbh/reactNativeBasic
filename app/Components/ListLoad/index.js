import React, { Component } from 'react';
import {
    Text,
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
      <View>
        <Text>{this.props.state?'加载中...':'我已经到底了'}</Text>
      </View>
    )
  }
};