import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import YouTubePlayer from 'react-native-youtube-sdk';
import {examplevideo} from '../Backend/Backend';
import {styles} from '../../Stylesheet';

export default class Testvideo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <YouTubePlayer
          ref={ref => (this.youTubePlayer = ref)}
          videoId={examplevideo.ID}
          autoPlay={false}
          fullscreen={false}
          showFullScreenButton={true}
          showSeekBar={true}
          showPlayPauseButton={true}
          startTime={5}
          style={{width: '100%', height: 260}}
          onReady={e => console.log('onReady', e.type)}
          onError={e => console.log('onError', e.error)}
          onChangeState={e => console.log('onChangeState', e.state)}
          onChangeFullscreen={e =>
            console.log('onChangeFullscreen', e.isFullscreen)
          }
        />
      </View>
    );
  }
}
