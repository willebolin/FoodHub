import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { JustADash } from '../Backend/JustADash';
import { workingHours } from '../Backend/workingHours';
import { ItsAlive1 } from '../Backend/ItsAlive1';
import { HowToWMM } from '../Backend/HowToWMM';
import { perfectMeatball } from '../Backend/perfectMeatball';
import { butBetter } from '../Backend/butBetter'
import { thanksgivingLeftovers } from '../Backend/thanksgivingLeftovers';

import { SafeAreaView } from 'react-navigation';
import ThumbNail from '../Components/ThumbNail';
import Slide from '../Components/Slider';
import AsyncStorage from '@react-native-community/async-storage';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getSeries();

    this.state = {
      startedShows: "shows",
      isWatching: "false",
      rubric: "RECOMMENDED FOR YOU"
    }
    this.getSeries = this.getSeries.bind(this)
  }


  componentDidCatch() {
    this.getSeries();
  }


  getSeries = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      if (keys.length !== 0) {
        console.log(this.state.startedShows)
        this.setState({ isWatching: "true", rubric: "KEEP WATCHING", startedShows: keys })
        console.log(this.state.startedShows)
      }
    } catch (error) {
      this.setState({ startedShows: 'nothing' })
    }
  };


  loadKeepWatching() {
    var returnobject = []
    if (this.state.isWatching === "false") {
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={butBetter} key={123} callHome={this.getSeries} />)
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={HowToWMM} key={234} callHome={this.getSeries} />)
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={perfectMeatball} key={345} callHome={this.getSeries} />)
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={ItsAlive1} key={456} callHome={this.getSeries} />)
    } else {
      for (var i = 0; i < this.state.startedShows.length; i++) {
        console.log(this.state.startedShows.length)
        returnobject.push(<ThumbNail navigation={this.props.navigation} series={workingHours} key={456} callHome={this.getSeries} />)
      }
    }
    return returnobject;
  }


  render() {
    return (
      <SafeAreaView style={{}}>
        <View>
          <ScrollView style={{ backgroundColor: "white" }}>
            <View>
              <Slide navigation={this.props.navigation} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                {this.state.rubric}
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  {this.loadKeepWatching()}
                </ScrollView>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                NEW RELEASES
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  <ThumbNail navigation={this.props.navigation} series={ItsAlive1} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={workingHours} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={JustADash} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={HowToWMM} callHome={this.getSeries} />
                </ScrollView>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                POPULAR SHOWS
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  <ThumbNail navigation={this.props.navigation} series={perfectMeatball} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={butBetter} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={thanksgivingLeftovers} callHome={this.getSeries} />
                </ScrollView>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                INTERNET PERSONALITIES
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  <ThumbNail navigation={this.props.navigation} series={HowToWMM} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={ItsAlive1} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={butBetter} callHome={this.getSeries} />
                </ScrollView>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                CLASSICS
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  <ThumbNail navigation={this.props.navigation} series={JustADash} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={workingHours} callHome={this.getSeries} />
                  <ThumbNail navigation={this.props.navigation} series={thanksgivingLeftovers} callHome={this.getSeries} />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
