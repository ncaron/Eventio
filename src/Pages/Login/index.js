import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';

import changeTitle from '../../Helpers/changeTitle';
import Logo from '../../Common/Logo';
import LeftPanel from '../../Common/LeftPanel';
import LoginContainer from './style';
import FormFieldStyled from './FormFieldStyled';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import { login } from '../../Actions/userAction';

const iconShow = require('../../Common/images/iconShow.png');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordType: 'password'
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    this.props.login(this.state.email, this.state.password);
  }

  togglePassword() {
    this.setState(prevState => {
      return { passwordType: prevState.passwordType == 'password' ? 'text' : 'password' };
    });
  }

  render() {
    changeTitle('Login');

    return (
      <div>
        {this.props.loggedIn && <Redirect to="/"/>}

        <Logo color="light" />
        <LeftPanel />

        <LoginContainer onSubmit={ this.handleOnSubmit } error={ this.props.loginError } noValidate>
          <h1>Sign in to Eventio.</h1>
          <p>
            {this.props.loginError ?
              'Oops! That email and pasword combination is not valid.' :
              'Enter your details below.'
            }
          </p>

          <FormFieldStyled value={ this.state.email }error={ this.props.loginError }>
            <input
              name="email"
              type="email"
              value={ this.state.email }
              onChange={ this.handleOnChange } />
            <label>Email</label>
          </FormFieldStyled>

          <FormFieldStyled value={ this.state.password }error={ this.props.loginError }>
            <input
              className="passwordInput"
              name="password"
              type={ this.state.passwordType }
              value={ this.state.password }
              onChange={ this.handleOnChange } />
            <label>Password</label>

            <img
              src={ iconShow }
              alt="Show Password"
              onClick={ this.togglePassword } />
          </FormFieldStyled>

          <Link to="forgotpassword" className="forgotpassword">Forgot Password?</Link><br />
          <Link to="signup" className="signup">Don’t have account? <strong>Sign up</strong></Link>

          <PrimaryButton>Sign <span>in</span></PrimaryButton>
        </LoginContainer>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired
};

const mapStateToProps = ({userReducer}) => userReducer;

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
