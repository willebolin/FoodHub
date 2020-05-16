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


var shows = [JustADash, workingHours, ItsAlive1, HowToWMM, perfectMeatball, ButBetter, thanksgivingLeftovers,
    AndyExplores, gordonramsey, handmade, italianfood, miseEnPlace, ramenSchool, reverseEngineering];

var getShow = function (id) {
    for (var i = 0; i < shows.length; i++) {
        if (shows[i].id === id) {
            return shows[i];
        }
    }
}

var getRecommended = function () {
    var returnArray = shows;
    while (returnArray.length > 5) {
        var index = Math.floor(Math.random() * (returnArray.length + 1));
        returnArray.splice(index, 1);
    }
    return returnArray;
}

var server = {
    getShow: getShow,
    getRecommended: getRecommended,
}

export var server;