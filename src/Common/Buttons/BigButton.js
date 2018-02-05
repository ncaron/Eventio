import styled from 'styled-components';

import { white } from '../colorPalette';

const BigButton = styled.button`
  display: block;
  width: 240px;
  height: 57px;
  margin-top: 40px;
  padding: 0;
  color: ${white};
  font-family: "Hind", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  a {
    display: block;
    color: ${white};
    line-height: 59px;
  }
`;

export default BigButton;
