import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import { JustADash } from '../Backend/JustADash';
import { workingHours } from '../Backend/WorkingHours';
import { ItsAlive1 } from '../Backend/ItsAlive1';
import { HowToWMM } from '../Backend/HowToWMM';
import { perfectMeatball } from '../Backend/PerfectMeatball';
import { ButBetter } from '../Backend/ButBetter'
import { thanksgivingLeftovers } from '../Backend/ThanksgivingLeftovers';
import { server } from '../Backend/Server';

import { SafeAreaView } from 'react-navigation';
import ThumbNail from '../Components/ThumbNail';
import Slide from '../Components/Slider';
import MySeries from '../Components/MySeries';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../../Stylesheet';


export default class MyStuff extends React.Component {
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
        this.setState({ isWatching: "true", rubric: "Keep watching", startedShows: keys })
        console.log(this.state.startedShows)
      }
    } catch (error) {
      this.setState({ startedShows: 'nothing' })
    }
  };


  loadKeepWatching() {
    var returnobject = []
    if (this.state.isWatching === "false") {
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={server.getShow(1000)} key={123} callHome={this.getSeries} />)
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={HowToWMM} key={234} callHome={this.getSeries} />)
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={perfectMeatball} key={345} callHome={this.getSeries} />)
      returnobject.push(<ThumbNail navigation={this.props.navigation} series={ItsAlive1} key={456} callHome={this.getSeries} />)
    } else {
      for (var i = 0; i < this.state.startedShows.length; i++) {
        console.log(this.state.startedShows.length)
        returnobject.push(<ThumbNail navigation={this.props.navigation} series={server.getShow(1013)} key={456} callHome={this.getSeries} />)
      }
    }
    return returnobject;
  }


  render() {
    return (
      <SafeAreaView style={{backgroundColor: "#222222"}}>
        <FlatList
          ListHeaderComponent={() => (<Text style={[styles.categoriesText, {paddingTop: 10, paddingBottom:15}]}>Keep Watching</Text>)}
          data={server.getNewReleases()}
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
    );
  }
}
