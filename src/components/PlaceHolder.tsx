import React, {FC} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

interface Props {
  value: string;
}

const ColorPlaceHolder: FC<Props> = ({value}) => {
  return (
    <View>
      <TextInput
        placeholderTextColor="#aaa"
        style={styles.placeHolder}
        placeholder="Hex Code"
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeHolder: {
    height: 50,
    margin: 30,
    marginTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ff6c37',
    padding: 10,
    fontSize: 18,
    color: '#292961',
  },
});

export default ColorPlaceHolder;
