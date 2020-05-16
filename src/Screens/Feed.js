import React from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ThumbNail from '../Components/ThumbNail';
import Slide from '../Components/Slider';
import { styles } from '../../Stylesheet';
import { server } from '../Backend/Server';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <ScrollView style={{ backgroundColor: "#222222" }}>
            <View>
              <Slide navigation={this.props.navigation} />
            </View>
            <View style={styles.categoriesElement}>
              <Text style={styles.categoriesText}>
                Randomly Generated shows
              </Text>
              <View style={styles.categoriesScroll}>
                <FlatList
                  horizontal={true}
                  data={server.getRecommended()}
                  initialNumToRender={10}
                  maxToRenderPerBatch={5}
                  windowSize={2}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <ThumbNail navigation={this.props.navigation} series={item} />
                  )}
                />
              </View>
            </View>
            <View style={styles.categoriesElement}>
              <Text style={styles.categoriesText}>
                New releases
              </Text>
              <View style={styles.categoriesScroll}>
                <FlatList
                  horizontal={true}
                  data={server.getNewReleases()}
                  initialNumToRender={10}
                  maxToRenderPerBatch={5}
                  windowSize={2}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <ThumbNail navigation={this.props.navigation} series={item} />
                  )}
                />
              </View>
            </View>
            <View style={styles.categoriesElement}>
              <Text style={styles.categoriesText}>
                Popular shows
              </Text>
              <View style={styles.categoriesScroll}>
                <FlatList
                  horizontal={true}
                  data={server.getNewReleases()}
                  initialNumToRender={10}
                  maxToRenderPerBatch={5}
                  windowSize={2}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <ThumbNail navigation={this.props.navigation} series={item} />
                  )}
                />
              </View>
            </View>
            <View style={styles.categoriesElement}>
              <Text style={styles.categoriesText}>
                Internet personalities
              </Text>
              <View style={styles.categoriesScroll}>
                <FlatList
                  horizontal={true}
                  data={server.getNewReleases()}
                  initialNumToRender={10}
                  maxToRenderPerBatch={5}
                  windowSize={2}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <ThumbNail navigation={this.props.navigation} series={item} />
                  )}
                />
              </View>
            </View>
            <View style={styles.categoriesElement}>
              <Text style={styles.categoriesText}>
                Classics
              </Text>
              <View style={styles.categoriesScroll}>
                <FlatList
                  horizontal={true}
                  data={server.getNewReleases()}
                  initialNumToRender={10}
                  maxToRenderPerBatch={5}
                  windowSize={2}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <ThumbNail navigation={this.props.navigation} series={item} />
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
