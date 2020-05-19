import React from 'react';
import {
  FlatList,
} from 'react-native';
import { styles } from '../../Stylesheet';
import SeriesHeader from '../Components/SeriesHeader';
import Episode from '../Components/Episode';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { server } from '../Backend/Server';


export default class Series extends React.Component {
  constructor(props) {
    super(props);

    this.series = this.props.route.params.seriesTitle;
  }

  render() {
    return (
      <LinearGradient colors={['#37474F', '#263238', '#263238']} style={styles.linearGradient}>
        <SafeAreaView style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 0 }}>
          <FlatList
            ListHeaderComponent={() => (<SeriesHeader series={this.series} />)}
            data={this.series.episode}
            initialNumToRender={2}
            maxToRenderPerBatch={2}
            windowSize={2}
            keyExtractor={item => item.ID.toString()}
            renderItem={({ item }) => (
              <Episode
                episode={item}
                series={this.series}
                key={item.ID}
              />
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}