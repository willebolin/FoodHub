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

var activity = []

var hasWatched = function (ID) {
    for (var i = 0; i < activity.length; i++) {
        var temp = '"' + ID + '"'
        if (activity[i] === temp) {
            return true;
        }
    }
    return false;
};

var getShow = function (id) {
    for (var i = 0; i < shows.length; i++) {
        if (shows[i].id.toString() === id.toString()) {
            return shows[i];
        }
    }
    return null;
};

getData = async () => {
    console.log("getting data")
    try {
        const keys = await AsyncStorage.getAllKeys()
        activity = keys
    } catch (error) {
        console.log('error');
    }
};

var getKeepWatching = function () {
    activeShows = []
    activity.forEach((element) => {
        var show = getShow(element)
        if (show !== null) {
            activeShows.push(show)
        }
    })
    return activeShows;
}

var getRecommended = function () {
    var returnArray = Object.create(shows);
    console.log(activity)
    for (var i = 0; i < activity.length; i++) {
        if (returnArray.includes(activity[i])) {
            const index = returnArray.indexOf(activity[i])
            if (index > -1) {
                returnArray.splice(index, 1);
            }
        }
    }
    while (returnArray.length > 5) {
        var index = Math.floor(Math.random() * (returnArray.length + 1));
        returnArray.splice(index, 1);
    }
    return returnArray;
}

var getCreators = function () {
    return [ButBetter, ramenSchool, perfectMeatball]
}

var getReality = function () {
    return [workingHours, AndyExplores, miseEnPlace, handmade, reverseEngineering]
}

var getHowTo = function () {
    return [JustADash, ItsAlive1, HowToWMM, perfectMeatball, ButBetter, gordonramsey, ramenSchool, italianfood]
}


var server = {
    getShow: getShow,
    getRecommended: getRecommended,
    getKeepWatching: getKeepWatching,
    getCreators: getCreators,
    getReality: getReality,
    getHowTo: getHowTo,
    getData: getData,
    hasWatched: hasWatched,
};

export var server;