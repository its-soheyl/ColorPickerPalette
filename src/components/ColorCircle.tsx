import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const ColorCircle: FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 18,
    marginTop: 50,
  },
  circle: {
    width: 80,
    height: 80,
    margin: 5,

    borderRadius: 50,
  },
});

export default ColorCircle;
