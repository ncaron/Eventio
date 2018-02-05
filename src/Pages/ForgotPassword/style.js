import UserFormContainer from '../../Common/Form/UserFormStyled';

import * as queries from '../../Common/queries';

const ForgotPasswordContainer = UserFormContainer.extend`
  button {
    margin-top: 48px;
  }

  @media (min-width: ${queries.LARGE}) {
    top: 369px;
    left: 719px;
  }
`;

export default ForgotPasswordContainer;
