import React from 'react';
import { View, Image } from 'react-native';
import { JustADash } from '../Backend/JustADash';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class ThumbNail extends React.Component {
    render() {
        return (
            <View style={{ height: 200, width: 130 }}>
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
        );
    }
}
