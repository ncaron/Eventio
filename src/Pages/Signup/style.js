import UserFormContainer from '../../Common/Form/UserFormStyled';

import * as queries from '../../Common/queries';
import { warm_pink } from '../../Common/colorPalette';

const LoginContainer = UserFormContainer.extend`
  .error {
    position: absolute;
    bottom: -20px;
    color: ${warm_pink};
    font-size: 12px;
  }

  @media (min-width: ${queries.LARGE}) {
    top: 225px;
  }
`;

export default LoginContainer;
