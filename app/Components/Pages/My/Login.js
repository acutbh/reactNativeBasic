import React, {Component} from 'react';
import {
} from 'react-native';

import * as Style from './style';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Style.Skip onPress={this.props.onClick} type={this.props.type}>
        <Style.SkipBox>
          <Style.SkipText login={true}>{this.props.type?'退出登录':'立即登录'}</Style.SkipText>
        </Style.SkipBox>
      </Style.Skip>
    );
  }
}