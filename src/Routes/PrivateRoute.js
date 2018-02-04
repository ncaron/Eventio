import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Component = this.props.component;

    return (
        this.props.loggedIn ?
          <Component /> :
          <Redirect to="/login" />
    );
  }
}

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = ({userReducer}) => {
  return (userReducer);
};

export default connect(mapStateToProps)(PrivateRoute);
