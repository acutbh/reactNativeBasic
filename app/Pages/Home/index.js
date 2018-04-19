import React, {Component} from 'react';
import {
  Text,
  Image,
} from 'react-native';
import {
  Carousel,
} from 'teaset';

import * as Style from './style';

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(Images.banner);
    return (
      <Style.Wrap>
        <Carousel
          style={{height: px2dp(400)}}
          control={
            <Carousel.Control
              style={{alignItems: 'flex-center'}}
              dot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: Style.Basic.mainColor, padding: 4}}>□</Text>}
              activeDot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: Style.Basic.mainColor, padding: 4}}>■</Text>}
            />
          }>
          <Image style={{width: px2dp(750), height: px2dp(400)}} resizeMode='cover' source={Images.banner} />
          <Image style={{width: px2dp(750), height: px2dp(400)}} resizeMode='cover' source={Images.banner} />
          <Image style={{width: px2dp(750), height: px2dp(400)}} resizeMode='cover' source={Images.banner} />
        </Carousel>
        <Text onPress={() => Actions.Login()}>点我跳转到登陆</Text>
      </Style.Wrap>
    );
  }
}