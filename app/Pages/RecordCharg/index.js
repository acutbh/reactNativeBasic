import React, {Component} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Text
} from 'react-native';

import {NavigationBar} from 'teaset';

import * as Style from './style';

export default class RecordCharg extends Component {
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
        <NavigationBar title='登录'
                       style={{height: 74, backgroundColor: '#3ea469'}}
                       statusBarStyle='default'
                       rightView={
                         <TouchableOpacity onPress={() => Actions.pop()}>
                           <Text>关闭</Text>
                         </TouchableOpacity>
                       }
        />
      </Style.PageWrap>
    );
  }
}