import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ errorMessage: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginfail.bind(this));
      });
  }

  onLoginfail() {
    this.setState({ errorMessage: 'Authentication Failed', loading: false })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      errorMessage: 'login success',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Spinner
            visible={true}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
        </View>
      )
    }
    return (
      <Button afterPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection style={{ fontSize: 30 }}>
          <Input
            // isSecureText={false} // can remove and works because undefined == false
            label='Email'
            onChangeText={email => this.setState({ email })}
            placeholder='chump@gmail.com'
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            isSecureText
            label='Password'
            onChangeText={password => this.setState({ password })}
            placeholder='password'
            value={this.state.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.errorMessage}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
};

export default LoginForm;