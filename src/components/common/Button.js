import React from 'react';
import { Text, TouchableOpacity, Pressable } from 'react-native';

const Button = ({ afterPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={afterPress}
      style={buttonStyle}
      android_ripple={{color: 'silver'}}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
};

export { Button };

