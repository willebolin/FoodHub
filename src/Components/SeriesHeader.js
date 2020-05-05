import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {styles} from '../../Stylesheet';

const {height, width} = Dimensions.get('window');

export default class SeriesHeader extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.SeriesImage}
          source={require('../ThumbNails/JustADash.png')}
        />
        <Text>{this.props.series.description}</Text>
      </View>
    );
  }
}
