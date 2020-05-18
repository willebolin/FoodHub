import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../Stylesheet';


export default class MySeries extends React.Component {

  render() {
    return (
      <View style={styles.containerMySeries}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Series', { seriesTitle: this.props.series })
          }>
          <Image
            style={styles.SeriesImage}
            source={this.props.series.image}
          />
          <Text style={[styles.thumbnailTitle, { paddingTop: 5 }]}>{this.props.series.title}</Text>
          <Text style={[styles.thumbnailSubtitle, { paddingBottom: 20 }]}>Episode X - Episode Title</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
