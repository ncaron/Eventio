import styled from 'styled-components';

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

  button {
    margin-right: auto;
    margin-left: auto;
  }
`;

export default PasswordSentContainer;
