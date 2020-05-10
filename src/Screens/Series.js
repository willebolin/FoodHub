import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {styles} from '../../Stylesheet';
import SeriesHeader from '../Components/SeriesHeader';
//import {JustADash} from '../Backend/JustADash';
import Episode from '../Components/Episode';

const {height, width} = Dimensions.get('window');

export default class Series extends React.Component {
  constructor(props) {
    super(props);

    this.series = this.props.route.params.seriesTitle;
    this.renderEpisodes = this.renderEpisodes.bind(this);
  }

  renderEpisodes() {
    var returnobject = [];
    for (var i = 0; i < this.series.episode.length; i++) {
      returnobject.push(
        <Episode
          episode={this.series.episode[i]}
          key={this.series.episode[i].ID}
        />,
      );
    }
    return returnobject;
  }

  render() {
    return (
      <ScrollView style={{ paddingLeft: 15, paddingRight:15 }}>
        <View>
          <SeriesHeader series={this.series} />
          {this.renderEpisodes()}
        </View>
      </ScrollView>
    );
  }
}
