import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import { JustADash } from '../Backend/JustADash';
import { workingHours } from '../Backend/workingHours';
import { ItsAlive1 } from '../Backend/ItsAlive1';
import { HowToWMM } from '../Backend/HowToWMM';
import { perfectMeatball } from '../Backend/perfectMeatball';
import { butBetter } from '../Backend/butBetter'
import { thanksgivingLeftovers } from '../Backend/thanksgivingLeftovers';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../Stylesheet';
import { SafeAreaView } from 'react-navigation';
import ThumbNail from '../Components/ThumbNail'

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <View>
          <ScrollView style={{ backgroundColor: "white" }}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Series', { seriesTitle: workingHours })
                }>
                <Text style={{ paddingTop: 10 }}>{'Now available: Season 1 of 24 Hours at the'}</Text>
                <Image
                  style={styles.SeriesImage}
                  source={require('../ThumbNails/featured.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,

                }}>
                NEW RELEASES
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  <ThumbNail navigation={this.props.navigation} series={ItsAlive1} />
                  <ThumbNail navigation={this.props.navigation} series={workingHours} />
                  <ThumbNail navigation={this.props.navigation} series={JustADash} />
                  <ThumbNail navigation={this.props.navigation} series={HowToWMM} />
                </ScrollView>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}>
                POPULAR SHOWS
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  <ThumbNail navigation={this.props.navigation} series={perfectMeatball} />
                  <ThumbNail navigation={this.props.navigation} series={butBetter} />
                  <ThumbNail navigation={this.props.navigation} series={thanksgivingLeftovers} />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
