import styled from 'styled-components';
import * as BasicStyle from '../../../Common/basicStyle';

export const Basic = BasicStyle;

export const Item = styled.View`
  margin-top: ${(props)=>props.index?px2dp(10):0}px;
  background: #fff;
  ${Basic.IntervalLR.inlineStyle.rules.join('')}
`;

export const Head = styled.View`
  border-color: ${Basic.pageBg};
  border-bottom-width: ${px2dp(2)}px;
  height: ${px2dp(68)}px;
  background: #fff;
  justify-content: center;
`;

export const Date = styled.Text`
  font-size: ${FONT_SIZE(12)}px;
  color: ${Basic.lightGray};
`;

export const Main = styled.Text`
  padding: ${px2dp(20)}px 0;
  line-height: ${px2dp(42)}px;
  font-size: ${FONT_SIZE(14)}px;
  color:${Basic.darkGray};
`;