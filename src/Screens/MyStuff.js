import React from 'react';
import {
  Text,
  FlatList,
} from 'react-native';
import { server } from '../Backend/Server';

import { SafeAreaView } from 'react-navigation';
import MySeries from '../Components/MySeries';
import { styles } from '../../Stylesheet';


export default class MyStuff extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#222222" }}>
        <FlatList
          ListHeaderComponent={() => (<Text style={[styles.categoriesText, { paddingTop: 10, paddingBottom: 15 }]}>Keep Watching</Text>)}
          data={server.getNewReleases()}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          windowSize={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <MySeries
              navigation={this.props.navigation}
              series={item}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}
