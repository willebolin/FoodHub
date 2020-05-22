import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import YouTubePlayer from 'react-native-youtube-sdk';
import { SafeAreaView } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { server } from '../Backend/Server';
import { styles } from '../../Stylesheet';
import Flurry from 'react-native-flurry-sdk';

export default class Episode extends React.Component {
  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this)
    this.isWatched = this.isWatched.bind(this)

    this.state = {
      limit: 160,
      watched: false,
    }

  }

  loadData = async (e) => {
    console.log(e.state)
    if (e.state === "PLAYING") {
      try {
        console.log("writing to memory")
        await AsyncStorage.setItem(JSON.stringify(this.props.series.id), 'true')
        await AsyncStorage.setItem(JSON.stringify(this.props.episode.ID), 'true')
        server.getData()
        this.setState({ watched: true })
        Flurry.logEvent('Episode Click');
      } catch (error) {
        console.log(error)
      }
    } else {
      return
    }
  }

  onLoadMore() {
    this.setState({ limit: 800 });
  }

  onLoadLess() {
    this.setState({ limit: 160 });
  }

  renderDescription(descr) {
    const limit = 160;
    if (descr.length < this.state.limit) {
      if (this.state.limit == 160) {
        return (<Text style={this.isWatched() ? styles.episodeDescriptionWatched : styles.episodeDescriptionUnwatched}>{descr}</Text>);
      } else if (this.state.limit == 800) {
        return (
          [<Text key={this.props.episode.ID} style={this.isWatched() ? styles.episodeDescriptionWatched : styles.episodeDescriptionUnwatched}>{descr}</Text>,
          <Text key={this.props.episode.episode_title} onPress={() => this.onLoadLess()} style={{ fontFamily: "Avenir-Black", fontWeight: 'bold', color: '#90A4AE' }}>Show Less</Text>]
        );
      }
    } else {
      return (
        [<Text key={this.props.episode.ID} style={this.isWatched() ? styles.episodeDescriptionWatched : styles.episodeDescriptionUnwatched}>{descr.substring(0, limit)}...</Text>,
        <Text key={this.props.episode.episode_title} onPress={() => this.onLoadMore()} style={{ fontFamily: "Avenir-Black", fontWeight: 'bold', color: '#90A4AE' }}>Show More</Text>]
      );
    }
  }

  isWatched() {
    return this.state.watched;
  }

  componentDidMount() {
    if (this.state.watched === false) {
      if (server.hasWatched(this.props.episode.ID) === true) {
        console.log('setting state')
        this.setState({
          watched: true
        })
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <YouTubePlayer
            ref={ref => (this.youTubePlayer = ref)}
            videoId={this.props.episode.ID}
            autoPlay={false}
            fullscreen={true}
            showFullScreenButton={true}
            showSeekBar={true}
            showPlayPauseButton={true}
            startTime={5}
            style={{ width: '50%', height: 120 }}
            onReady={e => console.log('onReady', e.type)}
            onError={e => console.log('onError', e.error)}
            onChangeState={e => this.loadData(e)}
            onChangeFullscreen={e => console.log('fullscreen', e.state)}
          />
          <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1, marginLeft: 10 }}>
            <Text numberOfLines={4} style={this.isWatched() ? styles.episodeTitleWatched : styles.episodeTitleUnwatched}>{this.props.episode.episode_number}. {this.props.episode.episode_title} </Text>
            <Text style={styles.watchedText} >
              {this.isWatched() ? "Watched" : ""}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', paddingTop: 10, paddingBottom: 20 }}>
          {this.renderDescription(this.props.episode.description)}
        </View>
      </SafeAreaView>
    );
  }
}
