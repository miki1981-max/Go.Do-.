import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import i18n, { currentLanguage } from '@/constants/i18n';

export default function Header(props : {changeLang : () => void}) {
    const [lang, setLang] = useState(currentLanguage);
  
      const translateLanguage = (lang : string) => {
          i18n.changeLanguage(lang);
          setLang(lang);
          props.changeLang()
      }
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
      <Text style={{ fontSize: 32, fontWeight: 'bold', color : 'transperent', opacity : 0 }}>Go.</Text>

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
        <TouchableOpacity style={{ marginRight: 5 }} onPress={() => translateLanguage('en')}>
          <Image
            source={require('../assets/images/uk.png')}
            style={{ width: 24, height: 16, resizeMode: 'contain', transform: [{ scale: lang === 'en' ? 1.3 : 1 }] }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => translateLanguage('sv')}>
          <Image
            source={require('../assets/images/se.png')}
            style={{ width: 24, height: 16, resizeMode: 'contain', transform: [{ scale: lang === 'sv' ? 1.3 : 1 }] }}
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
