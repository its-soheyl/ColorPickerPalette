import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Main from './src/screens/Main';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
