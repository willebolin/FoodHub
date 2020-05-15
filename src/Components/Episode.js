import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../Stylesheet';
import YouTubePlayer from 'react-native-youtube-sdk';
import { SafeAreaView } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Episode extends React.Component {
  constructor(props) {
    super(props);

    this.isPlaying = this.isPlaying.bind(this)
    this.loadData = this.loadData.bind(this)

    this.state = {
      limit:160
    }

  }

  isPlaying(e) {
    if (e.isFullscreen) {
      this.loadData()
    }
    console.log('onChangeState', e.isFullscreen)
  }

  loadData = async () => {
    console.log("writing to memory")
    try {
      await AsyncStorage.setItem(JSON.stringify(this.props.series.title), 'true')
      console.log(this.props.episode.episode_number)
    } catch (error) {
      console.log(error)
    }
  }

  onLoadMore() {
    this.setState({limit: 800});
  }

  renderDescription(descr) {
    const limit = 160;
    if(descr.length < this.state.limit) {
      return (<Text style={{fontFamily:"Avenir-Medium"}}>{descr}</Text>);
    } else {
      return (
        [<Text style={{fontFamily:"Avenir-Medium"}}>{descr.substring(0, limit)}...</Text>,
          <Text onPress={()=> this.onLoadMore()} style={{ fontWeight:'bold', color:'blue' }}>Read More</Text>]
      );
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
            onChangeState={e => console.log('onChangeState', e.state)}
            onChangeFullscreen={e => this.isPlaying(e)
            }
          />
          <View style={{ flexDirection: 'column', justifyContent: 'center', flex: 1, marginLeft: 10 }}>
            <Text style={{ fontFamily:"Avenir-Black" }}>{this.props.episode.episode_number}. {this.props.episode.episode_title}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', paddingTop: 10, paddingBottom: 20 }}>
          {this.renderDescription(this.props.episode.description)}
        </View>
      </SafeAreaView>
    );
  }
}