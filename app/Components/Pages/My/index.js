import React, {Component} from 'react';
import {
} from 'react-native';

import {NavigationBar} from 'teaset';

import Head from './Head';
import SkipList from './SkipList';
import Login from './Login';

import * as Style from './style';

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = () => {
    console.log('登录');
  }

  // 下拉加载
  refresh = () => {
    console.log('下拉加载');
  }

  render() {
    return (
      <Style.PageWrap refreshControl={<Style.Basic.RefreshControl onRefresh={this.refresh} refreshing={false} />}>
        <NavigationBar hidden={true} />
        <Head />
        <SkipList />
        <Login onClick={this.login} type='block' />
      </Style.PageWrap>
    );
  }
}