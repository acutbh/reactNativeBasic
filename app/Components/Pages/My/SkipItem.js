import React, {Component} from 'react';
import {
} from 'react-native';

import * as Style from './style';

export default class SkipItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Style.Skip onPress={()=>{this.props.onClick(this.props.site)}} type={this.props.type}>
        <Style.SkipBox>
          <Style.SkipLeft>
            <Style.Basic.Img source={this.props.icon} />
          </Style.SkipLeft>
          <Style.SkipText>{this.props.children}</Style.SkipText>
          <Style.SkipRight>
            <Style.Basic.Img source={Images.clickTip} />
          </Style.SkipRight>
        </Style.SkipBox>
      </Style.Skip>
    );
  }
}