import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';

import changeTitle from '../../Helpers/changeTitle';
import Logo from '../../Common/Logo';
import LeftPanel from '../../Common/LeftPanel';
import SignupContainer from './style';
import UserFormFieldStyled from '../../Common/Form/UserFormFieldStyled';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import { signup } from '../../Actions/userAction';

const spinner = require('../../Common/images/loading.png');

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      loading: false,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
      }
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    changeTitle('Sign Up');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn || nextProps.signupError) {
      this.setState({ loading: false });
    }

    if (nextProps.signupError == 'email') {
      this.setState({
        errors: {
          email: 'An account is already registered with this email.'
        }
      });
    }
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    this.setState(prevState => {
      return {
        firstName: prevState.firstName.trim(),
        lastName: prevState.lastName.trim(),
        email: prevState.email.trim()
      };
    });

    const errors = this.validateForm();

    if (!errors && !this.state.loading) {
      this.props.signup(this.state);
      this.setState({ loading: true });
    }
  }

  validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeatPassword');

    const firstNameError = firstName.validity.valueMissing || this.state.firstName.trim() === '';
    const lastNameError = lastName.validity.valueMissing || this.state.lastName.trim() === '';
    // Pattern provided by http://emailregex.com/
    const emailError = !email.validity.valid ||
      !email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let passwordError;
    let repeatPasswordError;

    if (password.value.includes(' ')) {
      passwordError = 'Password cannot include spaces.';
    } else if (password.validity.valueMissing) {
      passwordError = 'Password is a required field.';
    } else if (password.value.length < 6) {
      passwordError = 'Password must be at least 6 characters long.';
    }

    if (repeatPassword.validity.valueMissing) {
      repeatPasswordError = 'Repeat password is a required field';
    } else if (repeatPassword.value !== password.value) {
      repeatPasswordError = 'Passwords don\'t match.';
    }

    this.setState({
      errors: {
        firstName: firstNameError ? 'First name is a required field.' : '',
        lastName: lastNameError ? 'Last name is a required field.' : '',
        email: emailError ? 'Email not valid.' : '',
        password: passwordError,
        repeatPassword: repeatPasswordError
      }
    });

    return firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      repeatPasswordError;
  }

  render() {
    return (
      <div>
        {this.props.loggedIn && <Redirect to="/"/>}

        <Logo color="light" />
        <LeftPanel />

        <SignupContainer onSubmit={ this.handleOnSubmit } noValidate>
          <h1>Get started absolutely free.</h1>
          <p>Enter your details below.</p>

          <UserFormFieldStyled value={ this.state.firstName } error={ this.state.errors.firstName }>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={ this.state.firstName }
              onChange={ this.handleOnChange } />
            <label>First name</label>
            <p className="error">{this.state.errors.firstName}</p>
          </UserFormFieldStyled>

          <UserFormFieldStyled value={ this.state.lastName } error={ this.state.errors.lastName }>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={ this.state.lastName }
              onChange={ this.handleOnChange } />
            <label>Last name</label>
            <p className="error">{this.state.errors.lastName}</p>
          </UserFormFieldStyled>

          <UserFormFieldStyled value={ this.state.email } error={ this.state.errors.email }>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={ this.state.email }
              onChange={ this.handleOnChange } />
            <label>Email</label>
            <p className="error">{this.state.errors.email}</p>
          </UserFormFieldStyled>

          <UserFormFieldStyled value={ this.state.password } error={ this.state.errors.password }>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={ this.state.password }
              onChange={ this.handleOnChange } />
            <label>Password</label>
            <p className="error">{this.state.errors.password}</p>
          </UserFormFieldStyled>

          <UserFormFieldStyled value={ this.state.repeatPassword } error={ this.state.errors.repeatPassword }>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              required
              value={ this.state.repeatPassword }
              onChange={ this.handleOnChange } />
            <label>Repeat password</label>
            <p className="error">{this.state.errors.repeatPassword}</p>
          </UserFormFieldStyled>

          <Link to="/login" className="signup-login">Already have an account? <strong>Sign in</strong></Link>

          <PrimaryButton>
            {this.state.loading ?
              <img className="spinner" src={ spinner } /> :
              <p className="signup-login-btn">Sign <span>up</span></p>}
          </PrimaryButton>
        </SignupContainer>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  signupError: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = ({userReducer}) => userReducer;

const mapDispatchToProps = dispatch => bindActionCreators({signup}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
