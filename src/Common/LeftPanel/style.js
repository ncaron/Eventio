import styled from 'styled-components';

import * as queries from '../queries';
import {
  aqua_green,
  cool_grey,
  charcoal_grey,
  white
} from '../colorPalette';

const background = require('../images/trooperImage.png');

const Container = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 480px;
  background: url(${background}), ${charcoal_grey};
  text-align: center;
  z-index: -1;

  .quote-box {
    position: absolute;
    bottom: 86px;
    left: 50%;
    transform: translateX(-50%);
    width: 310px;

    .quote {
      color: ${white};
      font-family: "Playfair Display", serif;
      font-size: 36px;
    }

    span {
      display: block;
      background: ${aqua_green};
      width: 12px;
      height: 2px;
      margin: 21px auto 15px auto;
    }

    .author {
      color: ${cool_grey};
      font-size: 18px;
      line-height: 1.33;
    }
  }

  @media (min-width: ${queries.LARGE}) {
    display: block;
  }
`;

export default Container;
