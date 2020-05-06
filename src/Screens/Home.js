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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../Stylesheet';
import { SafeAreaView } from 'react-navigation';
import ThumbNail from '../Components/ThumbNail'

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <View>
          <ScrollView>
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Series', { seriesTitle: workingHours })
                }>
                <Text style={{ backgroundColor: "white" }}>{'Now available: Season 1 of 24 Hours at the'}</Text>
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
                  {/*The code inside of this scrollView will be put in the thumbnail component when working as we want it to*/}
                  <View style={{ height: 200, width: 130, marginLeft: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: ItsAlive1 })
                      }>
                      <Image
                        source={require('../ThumbNails/ItsAlive1thumb.png')}
                        style={{ height: 200, width: 130 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 200, width: 130, marginLeft: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: workingHours })
                      }>
                      <Image
                        source={require('../ThumbNails/24hoursthumb.jpeg')}
                        style={{ height: 200, width: 130 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 200, width: 130, marginLeft: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: JustADash })
                      }>
                      <Image
                        source={require('../ThumbNails/JustADashthumb.jpg')}
                        style={{ height: 200, width: 130 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 200, width: 130, marginLeft: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: HowToWMM })
                      }>
                      <Image
                        source={require('../ThumbNails/HowToWMMthumb.jpg')}
                        style={{ height: 200, width: 130 }}
                      />
                    </TouchableOpacity>
                  </View>
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
                YOUR FAVORITES
              </Text>
              <View style={{ height: 200, marginTop: 20 }}>
                <ScrollView horizontal={true}>
                  {/*The code inside of this scrollView will be put in the thumbnail component when working as we want it to*/}
                  <View style={{ height: 200, width: 130 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: ItsAlive1 })
                      }>
                      <Image
                        source={require('../ThumbNails/ItsAlive1thumb.png')}
                        style={{ height: 200, width: 130 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 200, width: 130, marginLeft: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: workingHours })
                      }>
                      <Image
                        source={require('../ThumbNails/24hoursthumb.jpeg')}
                        style={{ height: 200, width: 130 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ height: 200, width: 130, marginLeft: 20 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: JustADash })
                      }>
                      <Image
                        source={require('../ThumbNails/JustADashthumb.jpg')}
                        style={{ height: 200, width: 130 }}
                      />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
