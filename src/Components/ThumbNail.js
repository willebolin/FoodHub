import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../Stylesheet';


export default class ThumbNail extends React.Component {
    render() {
        return (
            <View style={{ height: 200, width: 130, marginLeft: 15 }}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Series', { seriesTitle: this.props.series })
                    }>
                    <Image
                        source={this.props.series.thumbnail}
                        style={{ height: 130, width: 130 }}
                    />
                    <Text style={styles.thumbnailTitle} numberOfLines={1}>{this.props.series.title}</Text>
                    <Text style={styles.thumbnailSubtitle}>{this.props.series.episode.length} episodes</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
