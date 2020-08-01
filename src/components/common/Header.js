import React from 'react';
import { View, Text } from 'react-native';


const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: 'silver',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    elevation: 5,
    position: 'relative',
  },
  textStyle: {
    fontSize: 35,
    //  textAlign: 'center',
    color: 'black',
  }
};

export {Header};