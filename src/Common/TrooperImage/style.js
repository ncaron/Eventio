import styled from 'styled-components';

import * as queries from '../queries';
import { dark_slate_blue } from '../colorPalette';

const TrooperImageStyled = styled.svg`
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  fill: ${dark_slate_blue};
  opacity: 0.06;
  z-index: -1;
  transition: all 0.5s ease-out;

  @media (min-width: ${queries.MEDIUM}) {
    width: 300px;
  }

  @media (min-width: ${queries.LARGE}) {
    top: 296px;
    left: 341px;
    transform: translateX(0);
    width: 445px;
  }
`;

export default TrooperImageStyled;
