import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

function Hamburger({ size = 28, barHeight = 3 }: { size?: number; barHeight?: number }) {
  // Bigger, bolder hamburger menu
  const barStyle = {
    width: size,
    height: barHeight,
    borderRadius: barHeight,
    backgroundColor: '#000',
  } as const;

  return (
    <View
      accessible
      accessibilityRole="button"
      style={{ justifyContent: 'center', alignItems: 'center', padding: 2 }}
    >
      <View style={barStyle} />
      <View style={[barStyle, { marginVertical: 5 }]} />
      <View style={barStyle} />
    </View>
  );
}

export default function Header() {
  const SEARCH_HEIGHT = 28; // slightly slimmer like Figma

  return (
    <View
      style={{
        paddingHorizontal: 12,
        paddingTop: 0,     // removes padding space
        marginTop: -20,    // pull header closer to top
        marginBottom: 30,
      }}
    >
      {/* Row 1 — Flags */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <TouchableOpacity accessibilityLabel="Switch to English" style={{ marginRight: 6 }}>
          <Image
            source={require('../assets/images/gb.png')}
            style={{ width: 30, height: 25, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <TouchableOpacity accessibilityLabel="Switch to Swedish">
          <Image
            source={require('../assets/images/sv.png')}
            style={{ width: 30, height: 25, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      {/* Row 2 — Go. | Search | Hamburger */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Go. */}
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginRight: 12 }}>Go.</Text>

        {/* Search with BLACK outline */}
        <TextInput
          placeholder="Search"
          accessibilityLabel="Search"
          placeholderTextColor="#B9B9B9"
          style={{
            flex: 1,
            height: SEARCH_HEIGHT,
            backgroundColor: '#FFFFFF',
            borderRadius: 6,
            paddingHorizontal: 10,
            marginRight: 10,
            borderWidth: 1,
            borderColor: '#000',
          }}
        />

        {/* Bigger Hamburger */}
        <TouchableOpacity accessibilityLabel="Open menu">
          <Hamburger size={28} barHeight={3} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
