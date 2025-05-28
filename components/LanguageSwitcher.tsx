import i18n, { languages } from '@/constants/i18n';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
//import i18n from '../constants/i18n';

//<Button title="EN" onPress={() => { i18n.locale = 'en'; }} />
//<Button title="SV" onPress={() => { i18n.locale = 'sv'; }} />
export default function LanguageSwitcher({setRender} : any) {
    const translateLanguage = (lang : string) => {
        i18n.changeLanguage(lang);
        setRender(lang)
    }
  return (
    <View style={styles.container}>
        {languages.map((elem) => <Button key={elem.type} title={elem.text} onPress={() => translateLanguage(elem.type)} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  }
});
