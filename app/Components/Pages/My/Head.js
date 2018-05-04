import React, {Component} from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import * as Style from './style';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }

  topup = () => {
    console.log('充值');
  }

  render() {
    return (
      <Style.Wrap>
        <Style.UserPic>
          <Style.UserPicImg source={Images.banner} />
        </Style.UserPic>
        <Style.UserContent>
          <Style.UCTop>
            <Style.UCName>瑞萌萌</Style.UCName>
            <Style.UCLevel>
              <Style.UCLVIcon source={Images.myHuiyuan} />
              <Style.UCLVText>V1会员</Style.UCLVText>
            </Style.UCLevel>
          </Style.UCTop>
          <Style.UCBtm>
            <Style.UCBBalance>余额：50.00元</Style.UCBBalance>
            <Style.UCBTopup onPress={this.topup}>充值</Style.UCBTopup>
          </Style.UCBtm>
        </Style.UserContent>
      </Style.Wrap>
    );
  }
}