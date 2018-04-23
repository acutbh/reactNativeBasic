import React, {Component} from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';
import {
  Carousel,
} from 'teaset';

import * as Style from './style';

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          key: '1',
          component: <Carousel
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
        },
        {
          key: '2',
          component: <Style.TemplateHead>
            <Style.TemplateTitle>第三方服务</Style.TemplateTitle>
          </Style.TemplateHead>,
        },
        {
          key: '3',
          component: <Style.ThirdParty>
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
        },
        {
          key: '4',
          component: <Style.TemplateHead interval>
            <Style.TemplateTitle>近期活动</Style.TemplateTitle>
          </Style.TemplateHead>,
        },
        {
          key: '5',
          component: <Style.RecentActivity>
            <Style.RAWrap>
              <Style.RAImg>
                <Style.Basic.Img resizeMode='cover' source={Images.banner}></Style.Basic.Img>
              </Style.RAImg>
              <Style.RAContent>
                <Style.RAName>发哈哈放假咯但是发大水jf就的撒可怜见发离开的撒娇</Style.RAName>
                <Style.RAMain>发哈哈复合大师可金凤凰金卡戴珊借款方会打撒接口返回肯德基三分科技的撒谎开房记录华师大接口返回打卡精神可嘉</Style.RAMain>
                <Style.RABtm>
                  <Style.RAPrice>￥240</Style.RAPrice>
                  <Style.RAPriceOld>￥240</Style.RAPriceOld>
                  <Style.RANum>已售：50</Style.RANum>
                </Style.RABtm>
              </Style.RAContent>
            </Style.RAWrap>
          </Style.RecentActivity>,
        },
      ],
    };
  }

  render() {
    return (
      <Style.Wrap>
        <FlatList
          data={this.state.listData}
          renderItem={({item}) => <View key={item.key}>{item.component}</View>}
        />
      </Style.Wrap>
    );
  }
}