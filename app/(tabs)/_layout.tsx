import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

const categories = [
  { label: 'Kul för barn', color: '#2ecc71', sub: ['0–4', '5–10', '11–15', 'Allt i kategorin'] },
  { label: 'Evenemang', color: '#e74c3c', sub: ['Festival', 'Konsert', 'Marknad', 'Alla'] },
  { label: 'Idrott & sport', color: '#9b59b6', sub: ['Fotboll', 'Gym', 'Simning', 'Alla'] },
  { label: 'Underhållning', color: '#000000', sub: ['Bio', 'Teater', 'Stand-up', 'Alla'] },
  { label: 'Kultur & sevärdheter', color: '#3498db', sub: ['Museum', 'Utställning', 'Historik', 'Alla'] },
  { label: 'Upplevelser & äventyr', color: '#95a5a6', sub: ['Escape Room', 'Paintball', 'Zipline', 'Alla'] },
  { label: 'Lära & utforska', color: '#e67e22', sub: ['Workshops', 'Föreläsning', 'Studiebesök', 'Alla'] },
  { label: 'Hälsa & välmående', color: '#f78ed0', sub: ['Yoga', 'Spa', 'Meditation', 'Alla'] },
];

export default function TabLayout() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f1c40f' }} contentContainerStyle={{ padding: 16 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Go.</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 10 }}>🌐</Text>
          <Text style={{ marginRight: 10 }}>🇸🇪</Text>
          <Text style={{ fontSize: 24 }}>☰</Text>
        </View>
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="Search"
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 10,
          marginVertical: 16,
          fontSize: 16,
        }}
      />

      {/* Section Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Vad vill du göra?</Text>

      {/* Categories */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {categories.map((category, index) => (
          <View key={index} style={{ width: '23%', marginBottom: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: category.color,
                paddingVertical: 12,
                borderRadius: 10,
              }}
              onPress={() => toggleExpand(index)}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12 }}>
                {category.label}
              </Text>
            </TouchableOpacity>

            {/* Subcategories */}
            {expandedIndex === index && (
              <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginTop: 6, justifyContent: 'space-between' }}>
                {category.sub.map((sub, i) => (
                  <View key={i} style={{ width: '48%', marginBottom: 6 }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#82e0aa',
                        paddingVertical: 8,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ textAlign: 'center', fontWeight: '600' }}>{sub}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Location */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>Var?</Text>
      <TextInput
        placeholder="Välj stad"
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
          marginTop: 8,
          fontSize: 16,
        }}
      />

      {/* Date */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 16 }}>När?</Text>
      <TextInput
        placeholder="Välj datum"
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
          marginTop: 8,
          fontSize: 16,
        }}
      />

      {/* Go Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          padding: 16,
          borderRadius: 12,
          marginTop: 24,
          marginBottom: 40,
        }}
      >
        <Text style={{ color: '#f1c40f', fontSize: 22, textAlign: 'center', fontWeight: 'bold' }}>Go.Do.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}