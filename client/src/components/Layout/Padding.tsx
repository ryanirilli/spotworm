import * as React from 'react';
import styled, { theme } from '../../theme';

interface IProps {
  children: JSX.Element[] | JSX.Element;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  vertical?: number;
  horizontal?: number;
  all?: number;
}

const Padding: React.SFC<IProps> = props => {
  const { baseUnit } = theme;
  const top = props.vertical || props.top || 0;
  const right = props.horizontal || props.right || 0;
  const bottom = props.vertical || props.bottom || 0;
  const left = props.horizontal || props.left || 0;
  const Container = styled.div`
    padding: ${top * baseUnit}px ${right * baseUnit}px ${bottom * baseUnit}px
      ${left * baseUnit}px;
  `;
  return <Container>{props.children}</Container>;
};

export default Padding;
