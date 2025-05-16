import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  return (
    <View style={styles.containerTouch}>
      <View style={styles.header}>
        <Text style={styles.logo}>Go.</Text>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
        <TouchableOpacity onPress={() => console.log('Open menu')}>
    <Text style={styles.menu}>☰</Text>
  </TouchableOpacity>
      </View>

      <Text style={styles.title}>Vad vill du göra?</Text>

      <View style={styles.buttonGrid}>
        {[
          'Evenemang',
          'Idrott & sport',
          'Underhållning',
          'Kultur & sevärdheter',
          'Utbildning',
        ].map((label, idx) => (
          <TouchableOpacity key={idx} style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTouch: {
    padding: 20,
    backgroundColor: '#F8D34D', // жёлтый фон
    minHeight: '100%',
    
  },
  header: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:16,
    marginTop: 30,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchInput: {
    marginTop: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width:200,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 16,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  menu: {
    fontSize: 24,
    color: '#000',
    marginLeft: 10,
  },
});