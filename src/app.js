import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button, CardSection, Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { isLoggedIn: null };

  UNSAFE_componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // copy web app config from firebase and place here like template example
        apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
        authDomain: "myapp-project-123.firebaseapp.com",
        databaseURL: "https://myapp-project-123.firebaseio.com",
        projectId: "myapp-project-123",
        storageBucket: "myapp-project-123.appspot.com",
        messagingSenderId: "65211879809",
        appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
        measurementId: "G-8GSGZQ44ST"    
      });
    }

    // manage state for whether user is logged in or not
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <CardSection>
            <Button afterPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.container}>
            <Spinner
              visible={true}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
};

export default App;

