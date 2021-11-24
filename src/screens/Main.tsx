import React from 'react';
import {SafeAreaView} from 'react-native';

import Buttons from '../components/Buttons';
import ColorCircle from '../components/ColorCircle';
import ColorPlaceHolder from '../components/ColorPlaceHolder';

const Main = () => {
  return (
    <SafeAreaView>
      <ColorPlaceHolder />
      <Buttons />
      <ColorCircle />
    </SafeAreaView>
  );
};

export default Main;
