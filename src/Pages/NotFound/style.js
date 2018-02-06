import styled from 'styled-components';

import * as queries from '../../Common/queries';
import {
  charcoal_grey,
  cool_grey
} from '../../Common/colorPalette';

const ErrorBodyContainer = styled.div`
  position: absolute;
  width: 272px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: left 0.5s ease-out;

  h1,
  p {
    transition: font-size 0.5s ease-out;
  }

  h1 {
    font-size: 22px;
    line-height: 2.18;
    text-align: center;
    color: ${charcoal_grey};
  }

  p {
    font-size: 14px;
    line-height: 1.71;
    color: ${cool_grey};
  }

  @media (min-width: ${queries.SMALL}) {
    width: 450px;

    h1 { text-align: left; }
  }

  @media (min-width: ${queries.MEDIUM}) {
    width: 550px;

    h1 { font-size: 28px; }
    p { font-size: 18px; }
  }

  @media (min-width: ${queries.LARGE}) {
    left: 699px;
    transform: translateY(-50%);

    p { font-size: 18px; }
    button { margin-left: 0; }
  }
`;

export default ErrorBodyContainer;
