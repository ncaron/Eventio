import UserFormContainer from '../../Common/Form/UserFormStyled';

import { silver_five } from '../../Common/colorPalette';

const LoginContainer = UserFormContainer.extend`
  .passwordInput { padding-right: 28px; }

  .forgotpassword {
    display: inline-block;
    margin-top: 24px;
    color: ${silver_five};
    font-size: 14px;
    line-height: 1.71;

    &:hover { text-decoration: underline; }
  }
`;

export default LoginContainer;
