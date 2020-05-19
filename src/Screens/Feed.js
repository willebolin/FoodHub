import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Slide from '../Components/Slider';
import { server } from '../Backend/Server';
import Category from '../Components/Category';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../Stylesheet';
import AsyncStorage from '@react-native-community/async-storage';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

  }

  /*
        <LinearGradient colors={['#263238', '#37474F', '#455A64', "#546E7A"]} style={styles.linearGradient}>
  */


  render() {
    server.getData()
    return (
      <LinearGradient colors={['#37474F', '#263238', '#263238']} style={styles.linearGradient}>
        <SafeAreaView>
          <View>
            <ScrollView>
              <View>
                <Slide navigation={this.props.navigation} />
              </View>
              <Category navigation={this.props.navigation} name={"Randomly Generated Shows"} getShows={server.getRecommended()} />
              <Category navigation={this.props.navigation} name={"Home Cooks"} getShows={server.getCreators()} />
              <Category navigation={this.props.navigation} name={"Get inspired to cook"} getShows={server.getReality()} />
              <Category navigation={this.props.navigation} name={"How To Cook"} getShows={server.getHowTo()} />
              <Category navigation={this.props.navigation} name={"New Releases"} getShows={server.getNewReleases()} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
