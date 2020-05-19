import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import { styles } from '../../Stylesheet';

export default class SeriesHeader extends React.Component {
  // Hardcode image sizes!
  render() {
    return (
      <View>
        <Image
          style={{ width: "100%", height:220 }}
          source={this.props.series.image}
        />
        <Text style={{ paddingBottom: 20, fontFamily:"Avenir-Medium", color: "white" }}>{this.props.series.description}</Text>
      </View>
    );
  }
}
