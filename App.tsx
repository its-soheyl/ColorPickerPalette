import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Main from './src/screens/Main';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
