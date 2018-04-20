import React, {Component} from 'react';
import {
  View,
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
    return (
      <Style.Wrap
        data={[
          <Carousel
            style={{height: px2dp(400)}}
            control={
              <Carousel.Control
                dot={<Style.CarCtrl></Style.CarCtrl>}
                activeDot={<Style.CarCtrl active></Style.CarCtrl>}
              />
            }>
            <Image style={{width: px2dp(750), height: px2dp(400)}} resizeMode='cover' source={Images.banner} />
            <Image style={{width: px2dp(750), height: px2dp(400)}} resizeMode='cover' source={Images.banner} />
            <Image style={{width: px2dp(750), height: px2dp(400)}} resizeMode='cover' source={Images.banner} />
          </Carousel>,
          <Style.TemplateHead>
            <Style.TemplateTitle>第三方服务</Style.TemplateTitle>
          </Style.TemplateHead>,
          <Style.ThirdParty>
            <Style.TPItem onPress={() => {console.log('x');Actions.Login()}}>
              <View>
                <Style.TPImg>
                  <Style.Basic.Img resizeMode='cover' source={Images.banner}></Style.Basic.Img>
                </Style.TPImg>
                <Style.TPName>服务一</Style.TPName>
              </View>
            </Style.TPItem>
            <Style.TPItem>
              <View>
                <Style.TPImg>
                  <Style.Basic.Img resizeMode='cover' source={Images.banner}></Style.Basic.Img>
                </Style.TPImg>
                <Style.TPName>服务二</Style.TPName>
              </View>
            </Style.TPItem>
            <Style.TPItem>
              <View>
                <Style.TPImg>
                  <Style.Basic.Img resizeMode='cover' source={Images.banner}></Style.Basic.Img>
                </Style.TPImg>
                <Style.TPName>服务三</Style.TPName>
              </View>
            </Style.TPItem>
          </Style.ThirdParty>,
          <Style.TemplateHead interval>
            <Style.TemplateTitle>近期活动</Style.TemplateTitle>
          </Style.TemplateHead>
        ]}
        renderItem={({item}) => {item.key}}
      />
    );
  }
}