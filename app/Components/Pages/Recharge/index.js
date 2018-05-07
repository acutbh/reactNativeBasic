import React, {Component} from 'react';
import {
  Text,
} from 'react-native';

import * as Style from './style';

import {NavigationBar} from 'teaset';

export default class Recharge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Style.PageWrap refreshControl={<Style.Basic.RefreshControl onRefresh={this.refresh} refreshing={false} />}>
        <NavigationBar hidden={true} />
        <Text>scan</Text>
      </Style.PageWrap>
    );
  }
}