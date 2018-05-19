import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import Skipitem from './SkipItem';

import * as Style from './style';

export default class SkipList extends Component {
  constructor(props) {
    super(props);
  }

  topup = (site) => {
    console.log('点击了', site);
    Actions[site]();
  }

  render() {
    return (
      <View>
        <Skipitem onClick={this.topup} site={'RecordCharg'} icon={Images.myJilu}>充电记录</Skipitem>
        <Skipitem onClick={this.topup} site={'MyCoupon'} icon={Images.myYouhuiquan} type='inline'>我的优惠券</Skipitem>
        <Skipitem onClick={this.topup} icon={Images.myChenliang} type='inline'>车辆绑定</Skipitem>
        <Skipitem onClick={this.topup} site={'Help'} icon={Images.myBangzhu} type='block'>使用说明</Skipitem>
      </View>
    );
  }
}