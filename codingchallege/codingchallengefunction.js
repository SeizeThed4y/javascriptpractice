'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDoplhins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins....`)
    }
}

checkWinner(scoreDoplhins, scoreKoalas);
//Test two

scoreDoplhins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)
checkWinner(scoreDoplhins, scoreKoalas);