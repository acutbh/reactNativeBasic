/**
 * Created by Rabbit on 2017/11/3.
 */

import React from 'react';
import {StyleSheet, Text, View, BackHandler, StatusBar, DeviceEventEmitter} from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import TabIcon from './Components/TabIcon';

import Home from './Components/Pages/Home'; // 首页
import Recharge from './Components/Pages/Recharge'; // 充电
import My from './Components/Pages/My'; // 我的
import RecordCharg from './Components/Pages/RecordCharg'; // 充电记录
import MyCoupon from './Components/Pages/MyCoupon'; // 我的优惠券
import Help from './Components/Pages/Help'; // 使用说明
import Login from './Pages/Login/Login';
import LoginPublic from './Pages/Login/LoginPublic';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    // console.log('ACTION:',action,Actions.currentScene)
    // console.log('Actions:', Actions);
    return defaultReducer(state, action);
  };
};

const onBackPress = () => {
  if (Actions.state.index === 0) {
    return false
  }
  Actions.pop()
  return true
}

const router = (...props) => (
  <Router createReducer={reducerCreate}
          backAndroidHandler={onBackPress}
  >
    <Modal
      hideNavBar
      transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid})}
    >
      <Stack hideNavBar headerMode='screen' key="tab">
        <Tabs
          key="tabbar"        // 唯一标识
          wrap={true}         // 自动使用自己的导航栏包装每个场景
          showLabel={false}   // 显示文字
          tabBarStyle={{
            backgroundColor: '#fff',
            height: px2dp(96),
            borderTopColor: '#fff',
          }} // tabBar的样式
          swipeEnabled={false}// 是否可以滑动
          headerMode='screen' // 页面切换方式
          icon={TabIcon}      // 自定义Icon显示方式
          lazy={true}         // 是否默认渲染tabbar
          tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
          activeBackgroundColor='white'   // 选中tabbar的背景色
          inactiveBackgroundColor='white' // 未选中tabbar的背景色
        >
          <Stack key="Home"
                 title={'首页'}
                 hideNavBar
                 image={Images.home}
                 selectedImage={Images.homeActive}
          >
            <Scene component={Home} key="key_Home"/>
          </Stack>
          <Stack key='Recharge'
                 hideNavBar
                 title='扫描'
                 image={Images.recharge}
                 selectedImage={Images.rechargeActive}
          >
            <Scene component={Recharge} key="key_Recharge"/>
          </Stack>
          <Stack key="My"
                 hideNavBar
                 title='我的'
                 image={Images.my}
                 selectedImage={Images.myActive}
          >
            <Scene component={My} key="key_My"/>
          </Stack>
        </Tabs>
        {/*// 推荐把需要的路由放在<Tabs/>后面，跳转的时候通过key，Actions.Test3_key*/}
        <Scene component={Home} key="tab_Home"/>
        <Scene component={Recharge} key="tab_Recharge"/>
        <Scene component={My} key="tab_My"/>
      </Stack>
      <Stack key="login">
        <Scene
          key="LoginRoot"
          component={Login}
          hideNavBar
          onExit={() => console.log('onExit')}
          onLeft={Actions.pop}
        />
        <Scene
          key="LoginPublic"
          component={LoginPublic}
          hideNavBar
          onExit={() => console.log('onExit')}
          onLeft={Actions.pop}
        />
      </Stack>
      <Stack key="RecordCharg">
        <Scene
          key="RecordChargRoot"
          component={RecordCharg}
          hideNavBar
          onExit={() => console.log('onExit')}
          onLeft={Actions.pop}
        />
      </Stack>
      <Stack key="MyCoupon">
        <Scene
          key="MyCouponRoot"
          component={MyCoupon}
          hideNavBar
          onExit={() => console.log('onExit')}
          onLeft={Actions.pop}
        />
      </Stack>
      <Stack key="Help">
        <Scene
          key="HelpRoot"
          component={Help}
          hideNavBar
          onExit={() => console.log('onExit')}
          onLeft={Actions.pop}
        />
      </Stack>
    </Modal>
  </Router>
);

export default router;