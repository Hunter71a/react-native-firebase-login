import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({isSecureText, label, onChangeText, placeholder, value}) => {
  const {containerStyle, inputStyle, labelStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={isSecureText}
        autoCorrect={false}
        fontSize={18}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={inputStyle}    
        value={value}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    fontWeight: 'normal',
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };