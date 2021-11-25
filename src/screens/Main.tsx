import React, {FC, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {getNineNew} from './data';

import Buttons from '../components/Buttons';
import ColorView from '../components/ColorView';
import PlaceHolder from '../components/PlaceHolder';

const Main: FC = () => {
  const [colors, setColors] = useState(getNineNew());
  const [colorCode, setColorCode] = useState('');

  const removeColorHandler = () => {
    const index = colors.indexOf(colorCode);
    delete colors[index];
    setColorCode('');
  };

  useEffect(() => {
    setColorCode;
  }, []);

  return (
    <View style={styles.container}>
      <PlaceHolder value={colorCode} />
      <Buttons
        btnTitle="Generate new colors"
        onPress={() => setColors(getNineNew())}
      />
      <Buttons
        btnTitle="Remove selected color"
        onPress={() => removeColorHandler()}
      />
      <View style={styles.colorAria}>
        {console.log(colors)}
        {colors.map((color, index) => {
          return (
            <ColorView
              key={index}
              color={color}
              onPress={() => setColorCode(color)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  colorAria: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    marginTop: 30,
  },
});

export default Main;
