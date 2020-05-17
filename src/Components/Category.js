import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ThumbNail from '../Components/ThumbNail';
import { styles } from '../../Stylesheet';

export default class Category extends React.Component {
    render() {
        return (
            <View style={styles.categoriesElement} >
                <Text style={styles.categoriesText}>
                    {this.props.name}
                </Text>
                <View style={styles.categoriesScroll}>
                    <FlatList
                        horizontal={true}
                        data={this.props.getShows}
                        initialNumToRender={10}
                        maxToRenderPerBatch={5}
                        windowSize={2}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <ThumbNail navigation={this.props.navigation} series={item} />
                        )}
                    />
                </View>
            </View >
        );
    }
}