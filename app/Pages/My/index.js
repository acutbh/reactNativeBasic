import React, {Component} from 'react';
import {
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import Head from '../../Components/Pages/My/Head';
import SkipList from '../../Components/Pages/My/SkipList';
import Login from '../../Components/Pages/My/Login';

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
      <Style.PageWrap refreshControl={<Style.Basic.RefreshControl onRefresh={this.refresh} refreshing={true} />}>
        <Head />
        <SkipList />
        <Login onClick={this.login} type='block' />
      </Style.PageWrap>
    );
  }
}