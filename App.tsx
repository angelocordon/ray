import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from 'screens/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App: React.FC = () => (
  <View style={styles.container}>
    <Home />
  </View>
);

export default App;
