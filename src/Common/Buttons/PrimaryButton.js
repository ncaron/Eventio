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
`;

export default PrimaryButton;
