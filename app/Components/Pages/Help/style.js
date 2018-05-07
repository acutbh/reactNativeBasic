import styled from 'styled-components';
import * as BasicStyle from '../../../Common/basicStyle';

export const Basic = BasicStyle;

export const PageWrap = styled.ScrollView`
  flex: 1;
  padding: ${px2dp(8)}px 0;

  ${Basic.PageWrap.inlineStyle.rules.join('')}
`;

export const Wrap = styled.View`
  ${Basic.IntervalLR.inlineStyle.rules.join('')}
`;

export const Text = styled.Text`
  margin-top: ${px2dp(16)}px;
  font-size: ${FONT_SIZE(16)}px;
  color: ${Basic.darkGray};
  line-height: ${px2dp(48)}px;
  ${Basic.IntervalLR.inlineStyle.rules.join('')}
`;
