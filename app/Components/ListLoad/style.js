import styled from 'styled-components';
import * as BasicStyle from '../../Common/basicStyle';

export const Basic = BasicStyle;

export const Wrap = styled.View`
  padding: ${px2dp(30)}px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator= styled.ActivityIndicator`
  width: ${px2dp(40)}px;
`;

export const StateText = styled.Text`
  margin-left: ${px2dp(8)}px;
  font-size: ${FONT_SIZE(12)}px;
  color: ${Basic.ashGray};
`;

