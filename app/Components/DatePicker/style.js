import styled from 'styled-components';
import * as BasicStyle from '../../Common/basicStyle';

export const Basic = BasicStyle;

export const Wrap = styled.View`
`;

export const PickerWrap = styled.View`
  flex-direction: row;
  padding: ${px2dp(20)}px 0;
`;

export const DateBox = styled.View`
  background: #fff;
`;

export const Confirm = styled.TouchableOpacity.attrs({
  activeOpacity: .8,
})`
  background: ${Basic.mainColor};
`;

export const ConfirmText = styled.Text`
  height: ${px2dp(80)}px;
  line-height: ${px2dp(80)}px;
  text-align: center;
  color: #fff;
  font-size: ${FONT_SIZE(16)}px;
`;

