import styled from 'styled-components';

import * as queries from '../queries';
import {
  white,
  charcoal_grey
} from '../colorPalette';

const LogoStyled = styled.svg`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 30px;
  height: 30px;
  fill: ${charcoal_grey};

  @media (min-width: ${queries.LARGE}) {
    top: 39px;
    left: 61px;
    fill: ${props => props.color == 'light' ? white : charcoal_grey};
  }
`;

export default LogoStyled;
