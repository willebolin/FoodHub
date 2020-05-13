import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class ThumbNail extends React.Component {
    render() {
        return (
            <View style={{ height: 200, width: 130, marginLeft: 15 }}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: this.props.series, callHome: this.props.callHome })
                    }>
                    <Image
                        source={this.props.series.thumbnail}
                        style={{ height: 200, width: 130 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
