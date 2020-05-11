import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <OTPInputView
        style={{width: '100%', height: 200, backgroundColor: '#0000FF'}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 70,
    height: 45,
    fontSize: 30,
    backgroundColor: '#999',
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 70,
    height: 45,
    fontSize: 30,
    borderWidth: 0,
    backgroundColor: '#999',
    borderRadius: 10,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
