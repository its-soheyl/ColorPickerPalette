import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Buttons: FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnGen}>
        <Text style={styles.text}>Generate new Color</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRem}>
        <Text style={styles.text}>Remove Selected color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnGen: {
    width: 180,
    height: 40,
    backgroundColor: '#ff6c37',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnRem: {
    width: 180,
    height: 40,
    backgroundColor: '#292961',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Buttons;
