import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function ShowAllButton({ onPress, style, textStyle }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.btn, style]}>
      <Text style={[styles.text, textStyle]}>Visa mig allt</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',   // no border
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
});
