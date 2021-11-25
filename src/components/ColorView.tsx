import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  color: string | undefined;
  onPress: () => void;
}

interface Style {
  hexColor: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  hexColor: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 5,
  },
});

const ColorView: FC<Props> = ({color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.hexColor} backgroundColor={color} />
    </TouchableOpacity>
  );
};

export default ColorView;
