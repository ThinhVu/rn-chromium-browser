import React, {useState, useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import {TextInput, Button, View, StyleSheet, SafeAreaView} from 'react-native';
import GigaWebView from 'react-native-giga-web-view';
import RNGigaFullScreen from 'react-native-giga-full-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})

const App = () => {
  const [url, setUrl] = useState('https://bing.com')
  const [link, setLink] = useState('')

  useEffect(() => {
    Orientation.lockToLandscape()
    if (Platform.OS === 'android') {
      RNGigaFullScreen.onFullScreen()
    }
  }, [])

  return (
      <SafeAreaView style={styles.container}>
        <View style={{width: '100%', height:'100%'}}>
          <View style={{flexDirection: 'row', backgroundColor: '#fff', borderBottomColor: '#aaa', borderBottomWidth: 2}}>
            <TextInput value={url} onChangeText={setUrl} style={{width: '80%'}}/>
            <Button onPress={() => setLink(url)} style={{width: '20%', borderLeftColor: '#aaa', borderLeftWidth: 2}} title="Go"/>
          </View>
          <GigaWebView scrollEnabled={true}
                       style={{flex: 1, width: '100%', height: '80%'}}
                       source={{uri: link}}/>
        </View>
      </SafeAreaView>
  );
}

export default App
