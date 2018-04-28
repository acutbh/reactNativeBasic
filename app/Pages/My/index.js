import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';

import Head from '../../Components/Pages/My/Head';

import * as Style from './style';

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Head></Head>
        <Text>我的</Text>
      </View>
    );
  }
}