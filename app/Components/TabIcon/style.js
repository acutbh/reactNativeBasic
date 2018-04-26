import styled from 'styled-components';
import * as BasicStyle from '../../Lib/basicStyle';

export const Basic = BasicStyle;

export const Img = styled.Image`
  height: 24px;
  width: 24px;
  margin-top: 3px;
  align-self: center;
`;

export const TabName = styled.Text`
  color: ${(props)=>props.tintColor};
  margin-top: 3px;
  font-size: 10px;
  align-self: center
`;
