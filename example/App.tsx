import * as React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {useFont} from 'rn-font';

export default function App() {
  const {isLoaded} = useFont({
    fontFamily: 'Inter',
    options: {
      weight: ['400', '700'],
      subsets: ['latin-ext'],
    },
  });

  console.log(isLoaded);

  return (
    <View style={styles.container}>
      <Text>{isLoaded}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
