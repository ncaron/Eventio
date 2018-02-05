import styled from 'styled-components';

import * as queries from '../../Common/queries';
import {
  charcoal_grey,
  pale_grey,
  silver_two,
  silver_three,
  warm_pink
} from '../../Common/colorPalette';

const FormFieldStyled = styled.div`
  position: relative;

  + div {
    margin-top: 40px;
  }

  input {
    display: block;
    width: 100%;
    padding-bottom: 7px;
    background: transparent;
    color: ${charcoal_grey};
    font-family: "Hind", sans-serif;
    font-size: 18px;
    line-height: 1.33;
    border: none;
    border-bottom: 1px solid ${props => props.error ? warm_pink : pale_grey};

    + label {
      position: absolute;
      top: 0;
      left: 0;
      color: ${silver_three};
      line-height: 1.5;
      transition: all 0.25s ease-out;
      z-index: -1;
    }

    &:focus {
      outline: none;
      border-bottom-color: ${charcoal_grey};

      + label {
        top: -24px;
        font-size: 14px;
        line-height: 1.71;
        color: ${silver_two};
      }
    }

    ${props => props.value &&
      `+ label {
        top: -24px;
        font-size: 14px;
        line-height: 1.71;
        color: ${silver_two};
      }`
    }
  }

  img {
    position: absolute;
    bottom: 12px;
    right: 0;
    cursor: pointer;
  }

  @media (min-width: ${queries.MEDIUM}) {
    input {
      + label { font-size: 18px; }

      &:focus {
        + label { font-size: 14px; }
      }

      ${props => props.value &&
        `+ label {
          font-size: 14px;
        }`
      }
    }
  }
`;

export default FormFieldStyled;
