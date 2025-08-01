// SubCategoryGrid.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SubCategoryGridProps {
  subcategories: string[];
  selected: string[];
  onToggle: (label: string) => void;
}

export default function SubCategoryGrid({ subcategories, selected, onToggle }: SubCategoryGridProps) {
  return (
    <View style={styles.grid}>
      {subcategories.map((label, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onToggle(label)}
          style={[styles.subBox, selected.includes(label) && styles.selected]}
        >
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
    marginLeft: 8,
  },
  subBox: {
    backgroundColor: '#2ecc71',
    padding: 8,
    borderRadius: 6,
    minWidth: 70,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#27ae60',
  },
  label: {
    color: 'white',
    fontWeight: '500',
  },
  });
