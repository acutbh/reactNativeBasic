import React, {Component} from 'react';
import {} from 'react-native';
import Picker from './Picker';
import {
  Overlay,
} from 'teaset';

import * as Style from './style';

const DatePicker = (data) => {
  const year = (new Date).getFullYear();
  // 返回
  const confirm = (res) => {
    Overlay.hide(key);
    data.confirm(res);
  }

  const overlayView = (
    <Overlay.PullView side='bottom' modal={false} overlayOpacity={data.opacity || .4}>
      <Style.DateBox>
        <Picker onConfirm={confirm} min={data.min || year} max={data.max || year + 40}></Picker>
      </Style.DateBox>
    </Overlay.PullView>
  );

  const key = Overlay.show(overlayView);
};

export default DatePicker;