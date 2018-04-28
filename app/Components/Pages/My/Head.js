import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import * as Style from './style';

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <Style.UCLVIcon source={Images.banner} />
              <Style.UCLVText>LV12</Style.UCLVText>
            </Style.UCLevel>
          </Style.UCTop>
          <Style.UCBtm>
            <Style.UCBBalance>余额：50.00元</Style.UCBBalance>
            <Style.UCBTopup>充值</Style.UCBTopup>
          </Style.UCBtm>
        </Style.UserContent>
      </Style.Wrap>
    );
  }
}