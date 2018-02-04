import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Common/Logo';
import LeftPanel from '../../Common/LeftPanel';
import ErrorBodyContainer from './style';
import RefreshButton from '../../Common/Buttons/RefreshButton';
import TrooperImage from '../../Common/TrooperImage';

const NotFound = () => {
  return (
    <div>
      <Logo color="light" />
      <LeftPanel />

      <ErrorBodyContainer>
        <h1>404 Error - page not found</h1>
        <p>Seems like Darth Vader just hits our website and drops it down.<br />Please press the refresh button and everything should be fine again.</p>
        <RefreshButton>
          <Link to ="/">Refresh</Link>
        </RefreshButton>
      </ErrorBodyContainer>

      <TrooperImage />
    </div>
  );
};

export default NotFound;
