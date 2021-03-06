import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Slide from '../Components/Slider';
import { server } from '../Backend/Server';
import Category from '../Components/Category';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../Stylesheet';
import AsyncStorage from '@react-native-community/async-storage';
import Flurry from 'react-native-flurry-sdk';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    server.getData()
    Flurry.logEvent('Visit Feed');
    return (
      <LinearGradient colors={['#37474F', '#263238', '#263238']} style={styles.linearGradient}>
        <SafeAreaView>
          <View>
            <ScrollView>
              <View>
                <Slide navigation={this.props.navigation} />
              </View>
              <Category navigation={this.props.navigation} name={"Explore New Shows"} getShows={server.getRecommended()} />
              <Category navigation={this.props.navigation} name={"Home Cooks"} getShows={server.getCreators()} />
              <Category navigation={this.props.navigation} name={"Cooking Entertainment"} getShows={server.getReality()} />
              <Category navigation={this.props.navigation} name={"Learn To Cook"} getShows={server.getHowTo()} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
