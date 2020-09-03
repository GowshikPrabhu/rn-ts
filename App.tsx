// components/Hello.tsx
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const App: React.FC<Props> = (props) => {
  return (
    <View style={styles.root}>
      <Text>Just a hello</Text>
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
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
