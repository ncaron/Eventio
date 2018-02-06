import BigButton from './BigButton';

import {
  dark_mint_green,
  greenblue
} from '../colorPalette';

const PrimaryButton = BigButton.extend`
  background: ${greenblue};

  &:hover {
    background: ${dark_mint_green};
  }

  span {
    letter-spacing: normal;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -13.5px 0 0 -13.5px;
    animation: rotate 1.5s linear infinite;
  }

  @keyframes rotate {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default PrimaryButton;
