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
import { styles } from '../../Stylesheet';
import SeriesHeader from '../Components/SeriesHeader';
//import {JustADash} from '../Backend/JustADash';
import Episode from '../Components/Episode';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('window');

export default class Series extends React.Component {
  constructor(props) {
    super(props);

    this.series = this.props.route.params.seriesTitle;
  }

  componentWillUnmount() {
    this.props.route.params.callHome();
    console.log("made it here")
  }

  render() {
    return (
      <SafeAreaView style={{ paddingLeft:15, paddingRight:15, paddingTop:0, backgroundColor: "#222222" }}>
        <FlatList
          ListHeaderComponent={() => (<SeriesHeader series={this.series} />)}
          data={this.series.episode}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          windowSize={2}
          keyExtractor={item => item.ID}
          renderItem={({ item }) => (
            <Episode
              episode={item}
              series={this.series}
              key={item.ID}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}
