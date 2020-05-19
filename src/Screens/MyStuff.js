import React from 'react';
import {
  Text,
  FlatList,
  View
} from 'react-native';
import { server } from '../Backend/Server';
import { SafeAreaView, NavigationEvents, NavigationContainer } from 'react-navigation';
import MySeries from '../Components/MySeries';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../Stylesheet';
import { useIsFocused } from '@react-navigation/native';


function MyStuff({ navigation }) {


  const isFocused = useIsFocused();
  return (
    <LinearGradient colors={['#37474F', '#263238', '#263238']} style={styles.linearGradient}>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={() => (<Text style={[styles.categoriesText, { paddingTop: 10, paddingBottom: 15 }]}>{isFocused ? 'Keep Watching' : 'No focus'}</Text>)}
          data={server.getKeepWatching()}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          windowSize={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <MySeries
              navigation={navigation}
              series={item}
            />
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
export default MyStuff;
