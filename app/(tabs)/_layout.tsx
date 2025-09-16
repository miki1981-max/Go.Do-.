
import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import ShowAllButton from "../../components/ShowAllButton";


export default function TabLayout() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<{ [key: number]: string[] }>({});

  const categories = [
    { label: "Kul för barn", color: "#2ecc71", sub: ["0-4", "5-10", "11-15", "Allt i kategorin"] },
    { label: "Evenemang", color: "#e74c3c", sub: ["Festival", "Konsert", "Marknad", "Alla"] },
    { label: "Idrott & sport", color: "#9b59b6", sub: ["Fotboll", "Gym", "Simning", "Alla"] },
    { label: "Underhållning", color: "#000000", sub: ["Bio", "Teater", "Stand-up", "Alla"] },
    { label: "Kultur & sevärdheter", color: "#3498db", sub: ["Museum", "Utställning", "Historik", "Alla"] },
    { label: "Upplevelser & äventyr", color: "#95a5a6", sub: ["Escape Room", "Paintball", "Ziplines", "Alla"] },
    { label: "Lära & utforska", color: "#e67e22", sub: ["Workshops", "Föreläsning", "Studiebesök", "Alla"] },
    { label: "Hälsa & välmående", color: "#f78ed0", sub: ["Yoga", "Spa", "Meditation", "Alla"] },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleSubcategory = (catIndex: number, subLabel: string) => {
    const selected = selectedSubcategories[catIndex] || [];
    const updated = selected.includes(subLabel)
      ? selected.filter(item => item !== subLabel)
      : [...selected, subLabel];
    setSelectedSubcategories(prev => ({ ...prev, [catIndex]: updated }));
  };

  // --- Force Figma-like line breaks ---
  const formatLabel = (label: string) => {
    switch (label) {
      case "Underhållning":
        return "Under-\nhållning";
      case "Kultur & sevärdheter":
        return "Kultur &\nsevärdheter";
      case "Upplevelser & äventyr":
        return "Upplevelser &\näventyr";
      case "Idrott & sport":
        return "Idrott \n& sport";
      case "Lära & utforska":
        return "Lära &\nutforska";
      case "Hälsa & välmående":
        return "Hälsa &\nvälmående";
      case "Kul för barn":
        return "Kul för\nbarn";
      case "Evenemang":
        return label; // single line
      default:
        return label;
    }
  };

  const renderCategoryGrid = () => {
    const rows = [];

    for (let i = 0; i < categories.length; i += 4) {
      const row = categories.slice(i, i + 4);
      const rowIndex = i;

      rows.push(
        <View key={`row-${rowIndex}`} style={styles.categoryRow}>
          {row.map((cat, indexInRow) => {
            const absoluteIndex = rowIndex + indexInRow;
            const text = formatLabel(cat.label);
            const oneLine = cat.label === "Evenemang";
            const isLongTwoLine =
              cat.label === "Kultur & sevärdheter" || cat.label === "Upplevelser & äventyr";

            return (
              <Pressable
                key={absoluteIndex}
                onPress={() => toggleExpand(absoluteIndex)}
                style={[styles.categoryButton, { backgroundColor: cat.color }]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    oneLine && styles.oneLine,
                    isLongTwoLine && styles.longTwoLineText,
                  ]}
                  numberOfLines={oneLine ? 1 : 2}
                  ellipsizeMode="clip"
                  allowFontScaling={false}
                >
                  {expandedIndex === absoluteIndex ? "X" : text}
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

    return <View>{rows}</View>;
  };

  return (
    <View style={styles.root}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.safeArea} edges={['top','left','right','bottom']}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
          <Header />

          <View style={styles.categoriesSection}>
            <Text style={styles.sectionTitle}>Vad vill du göra?</Text>

            {renderCategoryGrid()}

            {/* "Visa mig allt" tile — same size as a category, aligned right */}
            <View style={styles.categoryRow}>
              <View style={styles.categoryGhost} />
              <View style={styles.categoryGhost} />
              <View style={styles.categoryGhost} />
              <ShowAllButton style={[styles.categoryButton, styles.showAllTile, { alignItems: "center", justifyContent: "center" }]} />
            </View>
          </View>

          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>Var?</Text>
            <View style={styles.fakeImage}><Text style={styles.fakeImageText}>Välj stad</Text></View>

            <Text style={[styles.sectionTitle, { marginTop: 16 }]}>När?</Text>
            <View style={styles.fakeDate}><Text style={styles.fakeDateIcon}>📅</Text></View>
          </View>

          <View style={styles.goDoBtn}><Text style={styles.goDoText}>Go.Do.</Text></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const YELLOW = "#FFD700";
const TILE_HEIGHT = 66;
const H_PADDING = 10;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: YELLOW },
  safeArea: { flex: 1, backgroundColor: YELLOW },
  scroll: { flex: 1, backgroundColor: YELLOW },
  container: { paddingHorizontal: H_PADDING, paddingTop: 16, paddingBottom: 24, backgroundColor: YELLOW },

  categoriesSection: {
    width: '100%',
    paddingTop: 4,
    paddingBottom: 8,
    marginBottom: 12,
  },

  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  categoryButton: {
    width: "23%",
    height: TILE_HEIGHT,
    marginHorizontal: 3,
    borderRadius: 16,
    paddingRight: 10,
    paddingBottom: 9,
    paddingLeft: 6,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  categoryText: {
    alignSelf: "stretch",
    textAlign: "right",
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 13,
    lineHeight: 16,
  },
  // Slightly larger for single-line Evenemang
  oneLine: { fontSize: 14, lineHeight: 16 },
  // Slightly smaller/tighter for the two long labels so they fit 2 lines w/o ellipsis
  longTwoLineText: { fontSize: 12, lineHeight: 14 },

  // Subcategories (unchanged)
  subRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingHorizontal: 0,
  },
  subcategoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginVertical: 4,
    flexBasis: "23%",
    alignItems: "center",
  },
  selectedSub: { opacity: 0.8, borderWidth: 1, borderColor: "#fff" },
  subText: { color: "#fff", fontSize: 12 },

  categoryGhost: { width: "23%", height: TILE_HEIGHT, marginHorizontal: 3 },
  showAllTile: { backgroundColor: "#FFFFFF"},

  sectionBox: { marginBottom: 20 },
  fakeImage: {
    width: 100, height: 60, backgroundColor: "#ccc",
    borderRadius: 10, justifyContent: "center", alignItems: "center",
  },
  fakeImageText: { color: "#fff" },
  fakeDate: {
    width: 100, height: 60, backgroundColor: "#fff1c2",
    borderRadius: 10, justifyContent: "center", alignItems: "center",
  },
  fakeDateIcon: { fontSize: 22 },
  goDoBtn: {
    backgroundColor: "black", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginTop: 20,
  },
  goDoText: { color: YELLOW, fontSize: 20, fontWeight: "bold" },
});