import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';

import changeTitle from '../../Helpers/changeTitle';
import Logo from '../../Common/Logo';
import LeftPanel from '../../Common/LeftPanel';
import ForgotPasswordContainer from './style';
import UserFormFieldStyled from '../../Common/Form/UserFormFieldStyled';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import { forgotPassword } from '../../Actions/userAction';

const spinner = require('../../Common/images/loading.png');

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      loading: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    changeTitle('Forgot Password');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.passwordSent || nextProps.passwordResetError) {
      this.setState({ loading: false });
    }
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    if (!this.state.loading) {
      this.props.forgotPassword(this.state.email);
      this.setState({ loading: true });
    }
  }

  render() {
    return (
      <div>
        {this.props.loggedIn && <Redirect to="/"/>}
        {this.props.passwordSent && <Redirect to="/forgotpassword/sent"/>}

        <Logo color="light" />
        <LeftPanel />

        <ForgotPasswordContainer onSubmit={ this.handleOnSubmit } error={ this.props.passwordResetError } noValidate>
          <h1>Forgot your password?</h1>
          <p>
            {this.props.passwordResetError ?
              'Oops! That email is not valid.' :
              'Enter your email address below.'
            }
          </p>

          <UserFormFieldStyled value={ this.state.email } error={ this.props.passwordResetError }>
            <input
              name="email"
              type="email"
              value={ this.state.email }
              onChange={ this.handleOnChange } />
            <label>Email</label>
          </UserFormFieldStyled>

          <Link to="signup" className="signup-login">Don’t have account? <strong>Sign up</strong></Link>

          <PrimaryButton>
            {this.state.loading ?
              <img className="spinner" src={ spinner } /> :
              'Request reset link'}
          </PrimaryButton>
        </ForgotPasswordContainer>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  passwordSent: PropTypes.bool.isRequired,
  passwordResetError: PropTypes.bool.isRequired
};

const mapStateToProps = ({userReducer}) => userReducer;

const mapDispatchToProps = dispatch => bindActionCreators({forgotPassword}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
