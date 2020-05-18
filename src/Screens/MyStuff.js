import React from 'react';
import {
  Text,
  FlatList,
} from 'react-native';
import { server } from '../Backend/Server';
import { SafeAreaView, NavigationEvents, NavigationContainer } from 'react-navigation';
import MySeries from '../Components/MySeries';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../Stylesheet';
import { useIsFocused } from '@react-navigation/native';


export default class MyStuff extends React.Component {
  willFocus = this.props.navigation.addListener(
    'willFocus',
    payload => {
      this.forceUpdate();
    }
  );



  /*
        <LinearGradient colors={['#263238', '#37474F', '#455A64', "#546E7A"]} style={styles.linearGradient}>
  */

  componentDidMount() {
    console.log("updated Mystuff")
  }


  render() {
    return (
      <LinearGradient colors={['#37474F', '#263238', '#263238']} style={styles.linearGradient}>
        <SafeAreaView>
          <FlatList
            ListHeaderComponent={() => (<Text style={[styles.categoriesText, { paddingTop: 10, paddingBottom: 15 }]}>Keep Watching</Text>)}
            data={server.getKeepWatching()}
            initialNumToRender={2}
            maxToRenderPerBatch={2}
            windowSize={2}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <MySeries
                navigation={this.props.navigation}
                series={item}
              />
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
