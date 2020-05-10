import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../Stylesheet';
import YouTubePlayer from 'react-native-youtube-sdk';
import {SafeAreaView} from 'react-navigation';

export default class Episode extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <YouTubePlayer
            ref={ref => (this.youTubePlayer = ref)}
            videoId={this.props.episode.ID}
            autoPlay={false}
            fullscreen={true}
            showFullScreenButton={true}
            showSeekBar={true}
            showPlayPauseButton={true}
            startTime={5}
            style={{width: '50%', height: 120}}
            onReady={e => console.log('onReady', e.type)}
            onError={e => console.log('onError', e.error)}
            onChangeState={e => console.log('onChangeState', e.state)}
            onChangeFullscreen={e =>
              console.log('onChangeFullscreen', e.isFullscreen)
            }
          />
          <View style={{flexDirection: 'column', justifyContent: 'center', flex: 1, marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{this.props.episode.episode_number}. {this.props.episode.episode_title}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', paddingTop: 10, paddingBottom: 20}}>
          <Text>{this.props.episode.description}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
