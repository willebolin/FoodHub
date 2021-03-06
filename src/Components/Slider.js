import React from 'react';
import {
    View,
    Image,
    Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../Stylesheet';
import { workingHours } from '../Backend/WorkingHours';
import { JustADash } from '../Backend/JustADash';
import { perfectMeatball } from '../Backend/PerfectMeatball';

const { width } = Dimensions.get('window');

const Slider = props => ( //This is a function
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('Series', { seriesTitle: props.series })
            }>
            <Image style={styles.featuredImage} source={props.series.image} />
        </TouchableOpacity>
    </View>
)

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: [
                JustADash,
                workingHours,
                perfectMeatball
            ]
        }
    }

    render() {
        return (
            <View>
                <Swiper
                    autoplay
                    height={240}
                >
                    {
                        this.state.shows.map((item, i) => <Slider
                            series={item}
                            key={i}
                            navigation={this.props.navigation}
                        />)
                    }

                </Swiper>
            </View>
        )
    }
}