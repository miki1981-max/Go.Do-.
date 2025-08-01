import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 10,
      }}
    >
      {/* Logo */}
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Go.</Text>

      {/* Search */}
      <TextInput
        placeholder="Search"
        style={{
          flex: 1,
          marginHorizontal: 10,
          backgroundColor: 'white',
          borderRadius: 8,
          paddingHorizontal: 10,
          height: 40,
        }}
      />

      {/* Flags */}
      <View style={{ flexDirection: 'row', marginRight: 10 }}>
        <TouchableOpacity style={{ marginRight: 5 }}>
          <Image
            source={require('../assets/images/uk.png')}
            style={{ width: 24, height: 16, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/se.png')}
            style={{ width: 24, height: 16, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      {/* Hamburger */}
      <TouchableOpacity>
        <Image
          source={require('../assets/images/hamburger.png')}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}
