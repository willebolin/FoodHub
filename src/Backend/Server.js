import { JustADash } from './JustADash';
import { workingHours } from './WorkingHours';
import { ItsAlive1 } from './ItsAlive1';
import { HowToWMM } from './HowToWMM';
import { perfectMeatball } from './PerfectMeatball';
import { ButBetter } from './ButBetter.js'
import { thanksgivingLeftovers } from './ThanksgivingLeftovers';
import { AndyExplores } from './AndyExplors';
import { gordonramsey } from './GordonRamsey';
import { handmade } from './HandMade';
import { italianfood } from './ItalianFood';
import { miseEnPlace } from './MiseEnPlace';
import { ramenSchool } from './RamenSchool';
import { reverseEngineering } from './ReverseEngineering';

import AsyncStorage from '@react-native-community/async-storage';


var shows = [JustADash, workingHours, ItsAlive1, HowToWMM, perfectMeatball, ButBetter,
    AndyExplores, gordonramsey, handmade, italianfood, miseEnPlace, ramenSchool, reverseEngineering];

var getShow = function (id) {
    for (var i = 0; i < shows.length; i++) {
        if (shows[i].id === id) {
            return shows[i];
        }
    }
};

getAsyncData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        if (keys.length !== 0) {
            return "hello";
        }
        return keys;
    } catch (error) {
        this.setState({ startedShows: 'nothing' })
        return "hello";
    }
};

var getKeepWatching = function () {
    return [JustADash, JustADash, workingHours]
}


var getRecommended = function () {
    var returnArray = shows;
    while (returnArray.length > 5) {
        var index = Math.floor(Math.random() * (returnArray.length + 1));
        returnArray.splice(index, 1);
    }
    return returnArray;
}

var getNewReleases = function () {
    return [handmade, ramenSchool, miseEnPlace, reverseEngineering]
};

var server = {
    getShow: getShow,
    getRecommended: getRecommended,
    getNewReleases: getNewReleases,
    getKeepWatching: getKeepWatching,
};

export var server;