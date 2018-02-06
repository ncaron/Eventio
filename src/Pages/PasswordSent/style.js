import styled from 'styled-components';

import * as queries from '../../Common/queries';
import {
  charcoal_grey,
  cool_grey
} from '../../Common/colorPalette';

const PasswordSentContainer = styled.div`
  position: relative;
  top: 122px;
  text-align: center;

  h1 {
    margin-bottom: 6px;
    color: ${charcoal_grey};
    font-size: 22px;
    line-height: 1.45;

    span { display: block; }
  }

  p {
    font-size: 14px;
    line-height: 1.71;
    color: ${cool_grey};
  }

  @media (min-width: ${queries.MEDIUM}) {
    h1 {
      font-size: 28px;
      line-height: 1.71;
    }

    p {
      font-size: 18px;
      line-height: 1.33;
    }
  }

  @media (min-width: ${queries.LARGE}) {
    position: absolute;
    top: 425px;
    left: 719px;
    text-align: left;

    h1 {
      span { display: inline; }
    }

    button {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export default PasswordSentContainer;
