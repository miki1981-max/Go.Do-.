
import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import ShowAllButton from "../../components/ShowAllButton";
import { t } from "@/constants/i18n";



export default function TabLayout() {
  const categories = [
    { label: t('funForKids'), color: "#2ecc71", sub: ["0-4", "5-10", "11-15"] },
    { label: t('events'), color: "#e74c3c", sub: [t('festival'), t('concerts'), t('fairsfleamarketsandmarkets')] },
    { label: t('sportsandsportingactivites'), color: "#9b59b6", sub: [t('sportingactivities'), t("sports"), t('tryitout')] },
    { label: t('entertainment'), color: "#000000", sub: [t("cinemaandfilm"), t('musicandconcerts'), t('theaterandshows')] },
    { label: t('cultureandsights'), color: "#3498db", sub: [t('guidedtours'), t('artandartgalleries'), t('museumsandsights') ] },
    { label: t('adventureandactivities'), color: "#95a5a6", sub: [t('parksandtrails'), t('foodanddrinkactivities'), t('excursionsandadventures') ] },
    { label: t('learnandexplore'), color: "#e67e22", sub: [t('talksandlectures'), t('learnto'), t('clubsandsocialencounters')] },
    { label: t('healthandwellbeing'), color: "#f78ed0", sub: [t('spasandswimmingpools'), t('socialsupportandinteraction'), t('activitiesoffaith')] },
  ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<{ [key: number]: string[] }>({});
  const [render, setRender] = useState(false);
  const updateThisPage = () => {setRender(!render)}


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

  const renderCategoryGrid = () => {
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
                <Text
                  style={styles.categoryText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
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

    return <View>{rows}</View>;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header changeLang={updateThisPage} />
        <View style={styles.categoryWrapper}>
          {/* <Text style={styles.sectionTitle}>Vad vill du göra?</Text> */}
          <Text style={styles.sectionTitle}>{t('whatDoYouWantToDo')}</Text>
          {renderCategoryGrid()}
          <ShowAllButton />
        </View>

        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>{t('where')}</Text>
          <View style={styles.fakeImage}><Text style={styles.fakeImageText}>Välj stad</Text></View>

          
          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>{t('when')}</Text>
          
          <View style={styles.fakeDate}><Text style={styles.fakeDateIcon}>📅</Text></View>
        </View>

        <View style={styles.goDoBtn}><Text style={styles.goDoText}>Go.Do.</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFD700",
  },
  container: {
    padding: 16,
  },
  categoryWrapper: {
    backgroundColor: "#fff1c2",
    padding: 10,
    borderRadius: 15,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  categoryButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
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
    flexBasis: "23%",
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
  sectionBox: {
    marginBottom: 20,
  },
  fakeImage: {
    width: 100,
    height: 60,
    backgroundColor: "#ccc",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  fakeImageText: {
    color: "#fff",
  },
  fakeDate: {
    width: 50,
    height: 40,
    backgroundColor: "#fff1c2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  fakeDateIcon: {
    fontSize: 20,
  },
  goDoBtn: {
    backgroundColor: "black",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  goDoText: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
  },
});