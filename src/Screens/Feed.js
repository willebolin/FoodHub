import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Slide from '../Components/Slider';
import { server } from '../Backend/Server';
import Category from '../Components/Category';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../Stylesheet';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <LinearGradient colors={['#263238', '#37474F', '#455A64', "#546E7A"]} style={styles.linearGradient}>
        <SafeAreaView>
          <View>
            <ScrollView >
              <View>
                <Slide navigation={this.props.navigation} />
              </View>
              <Category navigation={this.props.navigation} name={"Randomly Generated Shows"} getShows={server.getRecommended()} />
              <Category navigation={this.props.navigation} name={"New Releases"} getShows={server.getNewReleases()} />
              <Category navigation={this.props.navigation} name={"New Releases"} getShows={server.getNewReleases()} />
              <Category navigation={this.props.navigation} name={"New Releases"} getShows={server.getNewReleases()} />
              <Category navigation={this.props.navigation} name={"New Releases"} getShows={server.getNewReleases()} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
