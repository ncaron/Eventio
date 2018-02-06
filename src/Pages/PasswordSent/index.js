import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import changeTitle from '../../Helpers/changeTitle';
import Logo from '../../Common/Logo';
import LeftPanel from '../../Common/LeftPanel';
import PasswordSentContainer from './style';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';

class PasswordSent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    changeTitle('Password Sent');
  }

  render() {
    return (
      <div>
        {!this.props.passwordSent && <Redirect to="/"/>}

        <Logo color="light" />
        <LeftPanel />

        <PasswordSentContainer>
          <h1><span>Great!</span> We sent you the reset link.</h1>
          <p>Please check your email.</p>

          <PrimaryButton>
            <Link to="/">Back to homepage</Link>
          </PrimaryButton>
        </PasswordSentContainer>
      </div>
    );
  }
}

PasswordSent.propTypes = {
  passwordSent: PropTypes.bool.isRequired
};

const mapStateToProps = ({userReducer}) => userReducer;

export default connect(mapStateToProps)(PasswordSent);
