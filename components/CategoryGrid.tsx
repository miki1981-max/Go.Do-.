import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Category = {
  label: string;
  color: string;
  sub: string[];
};

type Props = {
  categories: Category[];
  expandedIndex: number | null;
  selectedSubcategories: { [key: number]: string[] };
  toggleExpand: (index: number) => void;
  toggleSubcategory: (catIndex: number, label: string) => void;
};

export default function CategoryGrid({
  categories,
  expandedIndex,
  selectedSubcategories,
  toggleExpand,
  toggleSubcategory,
}: Props) {
  const rows = [];

  for (let i = 0; i < categories.length; i += 4) {
    const row = categories.slice(i, i + 4);
    const rowIndex = i;

    rows.push(
      <View key={`row-${rowIndex}`} style={styles.categoryRow}>
        {row.map((cat, indexInRow) => {
          const absoluteIndex = rowIndex + indexInRow;
          return (
            <Pressable
              key={absoluteIndex}
              onPress={() => toggleExpand(absoluteIndex)}
              style={[styles.categoryButton, { backgroundColor: cat.color }]}
            >
              <Text style={styles.categoryText}>
                {expandedIndex === absoluteIndex ? "X" : cat.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );

    const expandedInThisRow = row.findIndex((_, idx) => rowIndex + idx === expandedIndex);
    if (expandedInThisRow !== -1) {
      const catIndex = rowIndex + expandedInThisRow;
      const cat = categories[catIndex];

      rows.push(
        <View key={`sub-${catIndex}`} style={styles.subRow}>
          {cat.sub.map((sub, idx) => (
            <Pressable
              key={idx}
              onPress={() => toggleSubcategory(catIndex, sub)}
              style={[
                styles.subcategoryButton,
                { backgroundColor: cat.color },
                selectedSubcategories[catIndex]?.includes(sub) && styles.selectedSub,
              ]}
            >
              <Text style={styles.subText}>{sub}</Text>
            </Pressable>
          ))}
        </View>
      );
    }
  }

  return <View style={styles.grid}>{rows}</View>;
}

const styles = StyleSheet.create({
  grid: {
    width: '100%',
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  categoryButton: {
  width: "23%",
  aspectRatio: 1, // same width and height
  minHeight: 80,
  margin: "1%",
  borderRadius: 15,
  alignItems: "center",
  justifyContent: "center",
},
categoryText: {
  color: "#fff",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: 12,
  lineHeight: 16,
},

  subRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  subcategoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginVertical: 4,
    flexBasis: "23%", // 4 per row max
    alignItems: "center",
  },
  selectedSub: {
    opacity: 0.8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  subText: {
    color: "#fff",
    fontSize: 12,
  },
});
