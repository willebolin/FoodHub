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
  /**
  constructor(props) {
    super(props);

    this.series = this.props.series;
    //var icon = require(this.props.series.image);
  }
  */
  

  render() {
    return (
      <View>
        <Image
          style={styles.SeriesImage}
          //source={require('../ThumbNails/JustADash.png')}
          //source={require(JSON.stringify(this.props.series.image))}
          source={this.props.series.image}
        />
        <Text>{this.props.series.description}</Text>
      </View>
    );
  }
}
