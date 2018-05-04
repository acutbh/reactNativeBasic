import styled from 'styled-components';
import * as BasicStyle from '../../Common/basicStyle';

export const Basic = BasicStyle;

export const PageWrap = styled.ScrollView`
  ${Basic.PageWrap.inlineStyle.rules.join('')}
`;