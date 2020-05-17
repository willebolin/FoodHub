import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Slide from '../Components/Slider';
import { server } from '../Backend/Server';
import Category from '../Components/Category';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <ScrollView style={{ backgroundColor: "#222222" }}>
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
    );
  }
}
