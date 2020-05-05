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
import SeriesHeader from '../Components/SeriesHeader';
import { JustADash } from '../Backend/JustADash';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../Stylesheet';
import { SafeAreaView } from 'react-navigation';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <ScrollView>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Series', { JustADash })
              }>
              <SeriesHeader series={JustADash} />
            </TouchableOpacity>
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
                  <View style={{ height: 200, width: 120 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Series', { JustADash })
                      }>
                      <Image
                        source={require('../ThumbNails/JustADashthumb.jpg')}
                        style={{ width: null }}
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
