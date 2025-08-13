// ShowAllButton.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ShowAllButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}> To visa mig allt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#fff3d1',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    elevation: 1, 
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
