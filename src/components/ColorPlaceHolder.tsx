import React, {FC} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const ColorPlaceHolder: FC = () => {
  return (
    <View>
      <TextInput
        placeholderTextColor="#aaa"
        style={styles.placeHolder}
        placeholder="Color"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeHolder: {
    height: 50,
    margin: 30,
    marginTop: 60,
    borderBottomWidth: 2,
    borderBottomColor: '#ff6c37',
    padding: 10,
    opacity: 0.5,
  },
});

export default ColorPlaceHolder;
