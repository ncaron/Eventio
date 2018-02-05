import styled from 'styled-components';

import * as queries from '../../Common/queries';
import {
  charcoal_grey,
  cool_grey,
  red_pink,
  silver_three,
  silver_five
} from '../../Common/colorPalette';

const LoginContainer = styled.form`
  position: relative;
  top: 114px;
  width: calc(100% - 48px);
  margin: 0 auto;
  text-align: center;

  * { transition: font-size 0.5s ease-out; }

  h1 {
    color: ${charcoal_grey};
    font-size: 22px;
    line-height: 2.18;
  }

  p {
    color: ${props => props.error ? red_pink : cool_grey};
    margin-bottom: 48px;
    font-size: 14px;
    line-height: 1.71;
  }

  .forgotpassword {
    color: ${silver_five};
    margin-top: 24px;
  }

  .signup {
    color: ${silver_three};
    margin-top: 16px;

    strong {
      color: ${cool_grey};
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  .forgotpassword,
  .signup {
    display: inline-block;
    font-size: 14px;
    line-height: 1.71;

    &:hover { text-decoration: underline; }
  }

  button {
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: ${queries.SMALL}) {
    width: 450px;
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
    top: 321px;
    left: 719px;
    text-align: left;

    .signup {
      position: fixed;
      top: 40px;
      right: 39px;
      margin-top: 0;
    }

    button {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export default LoginContainer;
