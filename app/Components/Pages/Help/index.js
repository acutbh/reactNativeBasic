import React, {Component} from 'react';
import {
} from 'react-native';

import * as Style from './style';

import BasicNav from '../../BasicNav';

export default class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BasicNav pageName='使用说明'>
        <Style.PageWrap refreshControl={<Style.Basic.RefreshControl onRefresh={this.refresh} refreshing={false} />}>
          <Style.Text>发生烦死发生发生范德萨和浮夸吉萨大恒科技和发大好几块发杀得</Style.Text>
        </Style.PageWrap>
      </BasicNav>
    );
  }
}