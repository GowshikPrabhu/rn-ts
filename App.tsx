// components/Hello.tsx
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Toast from './src/Toast/Toast';

const App: React.FC = () => {
  return (
    <View style={styles.root}>
      <Toast type="success" message="This is just a sample message." />
      <View style={styles.button}>
        <Button title="toast" onPress={() => console.log('Clicked')}>
          Toast
        </Button>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default App;
