const smallPointTab = document.getElementById('smallpointtab');
const mediumPointTab = document.getElementById('mediumpointtab');
const bigPointTab = document.getElementById('bigpointtab');
const calculateSection = document.getElementById('calculateSection');
const smallPoint = document.getElementById('smallPoint');
const mediumPoint = document.getElementById('mediumPoint');
const bigPoint = document.getElementById('bigPoint');
const timeUTC = document.getElementById('timeUTC');

const SmallMyScore0 = document.getElementById('SmallMyScore0');
const SmallRivalScore3 = document.getElementById('SmallRivalScore3');
const SmallMyScore1 = document.getElementById('SmallMyScore1');
const SmallRivalScore2 = document.getElementById('SmallRivalScore2');
const SmallMyScore2 = document.getElementById('SmallMyScore2');
const SmallRivalScore1 = document.getElementById('SmallRivalScore1');
const SmallMyScore3 = document.getElementById('SmallMyScore3');
const SmallRivalScore0 = document.getElementById('SmallRivalScore0');
const MediumMyScore0 = document.getElementById('MediumMyScore0');
const MediumRivalScore4 = document.getElementById('MediumRivalScore4');
const MediumMyScore1 = document.getElementById('MediumMyScore1');
const MediumRivalScore3 = document.getElementById('MediumRivalScore3');
const MediumMyScore2 = document.getElementById('MediumMyScore2');
const MediumRivalScore2 = document.getElementById('MediumRivalScore2');
const MediumMyScore3 = document.getElementById('MediumMyScore3');
const MediumRivalScore1 = document.getElementById('MediumRivalScore1');
const MediumMyScore4 = document.getElementById('MediumMyScore4');
const MediumRivalScore0 = document.getElementById('MediumRivalScore0');
const BigMyScore0 = document.getElementById('BigMyScore0');
const BigRivalScore6 = document.getElementById('BigRivalScore6');
const BigMyScore1 = document.getElementById('BigMyScore1');
const BigRivalScore5 = document.getElementById('BigRivalScore5');
const BigMyScore2 = document.getElementById('BigMyScore2');
const BigRivalScore4 = document.getElementById('BigRivalScore4');
const BigMyScore3 = document.getElementById('BigMyScore3');
const BigRivalScore3 = document.getElementById('BigRivalScore3');
const BigMyScore4 = document.getElementById('BigMyScore4');
const BigRivalScore2 = document.getElementById('BigRivalScore2');
const BigMyScore5 = document.getElementById('BigMyScore5');
const BigRivalScore1 = document.getElementById('BigRivalScore1');
const BigMyScore6 = document.getElementById('BigMyScore6');
const BigRivalScore0 = document.getElementById('BigRivalScore0');

const deathline = document.getElementById('deathline');
const smallMaxScore = document.getElementById('smallMaxScore');
const ScoretoWin = document.getElementById('ScoretoWin');
const SummaryScoreWin = document.getElementById('SummaryScoreWin');


const SmallTagV1win = document.getElementById('SmallTagV1win');
const SmallTagV1lose= document.getElementById('SmallTagV1lose');
const SmallTagV2win = document.getElementById('SmallTagV2win');
const SmallTagV2lose= document.getElementById('SmallTagV2lose');
const SmallTagV3win = document.getElementById('SmallTagV3win');
const SmallTagV3lose= document.getElementById('SmallTagV3lose');
const SmallTagV4win = document.getElementById('SmallTagV4win');
const SmallTagV4lose= document.getElementById('SmallTagV4lose');

const MediumTagV1win = document.getElementById('MediumTagV1win');
const MediumTagV1lose= document.getElementById('MediumTagV1lose');
const MediumTagV2win = document.getElementById('MediumTagV2win');
const MediumTagV2lose= document.getElementById('MediumTagV2lose');
const MediumTagV3win = document.getElementById('MediumTagV3win');
const MediumTagV3lose= document.getElementById('MediumTagV3lose');
const MediumTagV4win = document.getElementById('MediumTagV4win');
const MediumTagV4lose= document.getElementById('MediumTagV4lose');
const MediumTagV5win = document.getElementById('MediumTagV5win');
const MediumTagV5lose= document.getElementById('MediumTagV5lose');

const BigTagV1win = document.getElementById('BigTagV1win');
const BigTagV1lose= document.getElementById('BigTagV1lose');
const BigTagV2win = document.getElementById('BigTagV2win');
const BigTagV2lose= document.getElementById('BigTagV2lose');
const BigTagV3win = document.getElementById('BigTagV3win');
const BigTagV3lose= document.getElementById('BigTagV3lose');
const BigTagV4win = document.getElementById('BigTagV4win');
const BigTagV4lose= document.getElementById('BigTagV4lose');
const BigTagV5win = document.getElementById('BigTagV5win');
const BigTagV5lose= document.getElementById('BigTagV5lose');
const BigTagV6win = document.getElementById('BigTagV6win');
const BigTagV6lose= document.getElementById('BigTagV6lose');
const BigTagV7win = document.getElementById('BigTagV7win');
const BigTagV7lose= document.getElementById('BigTagV7lose');




//массивы элементов получаемых равное кол-во очков
let myscore0 = [
    SmallMyScore0,
    MediumMyScore0,
    BigMyScore0,
];

let rivalscore0 = [
    SmallRivalScore0,
    MediumRivalScore0,
    BigRivalScore0,
];

let myscore1 = [
    SmallMyScore1,
    MediumMyScore1,
    BigMyScore1,
];

let rivalscore1 = [
    SmallRivalScore1,
    MediumRivalScore1,
    BigRivalScore1,
];

let myscore2 = [
    SmallMyScore2,
    MediumMyScore2,
    BigMyScore2,
];

let rivalscore2 = [
    SmallRivalScore2,
    MediumRivalScore2,
    BigRivalScore2,
];

let myscore3 = [
    SmallMyScore3,
    MediumMyScore3,
    BigMyScore3,
];

let rivalscore3 = [
    SmallRivalScore3,
    MediumRivalScore3,
    BigRivalScore3,
];

let myscore4 = [
    MediumMyScore4,
    BigMyScore4,
];

let rivalscore4 = [
    MediumRivalScore4,
    BigRivalScore4,
];

let myscore5 = [
    BigMyScore5
];

let rivalscore5 = [
    BigRivalScore5,
];

let myscore6 = [
    BigMyScore6,
];

let rivalscore6 = [
    BigRivalScore6,
];

function updateUTC() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const deathhours = String(now.getUTCHours()).padStart(2, '0');
    const deathminutes = String(now.getUTCMinutes()).padStart(2, '0');
    const deathseconds = String(now.getUTCSeconds()).padStart(2, '0');

    timeUTC.textContent = timeString;
}

function EndTimer(){
    const endHours = 23;
    const endMinutes = 50;
    const endSeconds = 0;

    const EndTimeSec = (endHours*60+endMinutes)*60+endSeconds;
    const now = new Date();
    const NowTimeSec = (now.getUTCHours()*60+now.getUTCMinutes())*60+now.getUTCSeconds();
    const SecondtoEnd = EndTimeSec - NowTimeSec;
    let hours = Math.trunc(SecondtoEnd/60/60);
    let minutes = Math.trunc((SecondtoEnd/60)-(hours*60));
    let seconds = SecondtoEnd - ((hours*60*60)+(minutes*60));
    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    const deathString = `${hours}:${minutes}:${seconds}`;

    if (!(minutes <= 0 && hours <= 0 && seconds<=0)) {
        deathline.textContent = deathString;
    } else {
        deathline.textContent = 'Раунд завершен!';
    }

    let limitScore = addThreeScore(SecondtoEnd);

    let myScore = Number(input1.value);
    let rivalScore = Number(input2.value);


    //Выводим свои свои очки в вариации с +0 очков
    myscore0.forEach(el=> {
       if (el) el.innerText = myScore;
    });

    myscore1.forEach(el=> {
        if (el) el.innerText = myScore+addOneScore(SecondtoEnd);
    });

    myscore2.forEach(el=> {
        if (el) el.innerText = myScore+addTwoScore(SecondtoEnd);
    });

    myscore3.forEach(el=> {
        if (el) el.innerText = myScore+addThreeScore(SecondtoEnd);
    });

    myscore4.forEach(el=> {
        if (el) el.innerText = myScore+addFourScore(SecondtoEnd);
    });

    myscore5.forEach(el=> {
        if (el) el.innerText = myScore+addFiveScore(SecondtoEnd);
    });

    myscore6.forEach(el=> {
        if (el) el.innerText = myScore+addSixScore(SecondtoEnd);
    });

    rivalscore0.forEach(el=> {
        if (el) el.innerText = rivalScore;
    });
    rivalscore1.forEach(el=> {
        if (el) el.innerText = rivalScore+addOneScore(SecondtoEnd);
    });
    rivalscore2.forEach(el=> {
        if (el) el.innerText = rivalScore+addTwoScore(SecondtoEnd);
    });
    rivalscore3.forEach(el=> {
        if (el) el.innerText = rivalScore+addThreeScore(SecondtoEnd);
    });
    rivalscore4.forEach(el=> {
        if (el) el.innerText = rivalScore+addFourScore(SecondtoEnd);
    });
    rivalscore5.forEach(el=> {
        if (el) el.innerText = rivalScore+addFiveScore(SecondtoEnd);
    });
    rivalscore6.forEach(el=> {
        if (el) el.innerText = rivalScore+addSixScore(SecondtoEnd);
    });


// Сравниваем очки и приминяем тэги


    // Маленькая вышка В1
    if(Number(SmallMyScore0.innerText)<Number(SmallRivalScore3.innerText)) {
        SmallTagV1lose.classList.add('d-flex');
        SmallTagV1lose.classList.remove('d-none');
        SmallTagV1win.classList.add('d-none');
        SmallTagV1win.classList.remove('d-flex');
    } else {
        SmallTagV1lose.classList.remove('d-flex');
        SmallTagV1lose.classList.add('d-none');
        SmallTagV1win.classList.remove('d-none');
        SmallTagV1win.classList.add('d-flex');
    }
    // Маленькая вышка В2
    if(Number(SmallMyScore1.innerText)<Number(SmallRivalScore2.innerText)) {
        SmallTagV2lose.classList.add('d-flex');
        SmallTagV2lose.classList.remove('d-none');
        SmallTagV2win.classList.add('d-none');
        SmallTagV2win.classList.remove('d-flex');
    } else {
        SmallTagV2lose.classList.remove('d-flex');
        SmallTagV2lose.classList.add('d-none');
        SmallTagV2win.classList.remove('d-none');
        SmallTagV2win.classList.add('d-flex');
    }

    // Маленькая вышка В3
    if(Number(SmallMyScore2.innerText)<Number(SmallRivalScore1.innerText)) {
        SmallTagV3lose.classList.add('d-flex');
        SmallTagV3lose.classList.remove('d-none');
        SmallTagV3win.classList.add('d-none');
        SmallTagV3win.classList.remove('d-flex');
    } else {
        SmallTagV3lose.classList.remove('d-flex');
        SmallTagV3lose.classList.add('d-none');
        SmallTagV3win.classList.remove('d-none');
        SmallTagV3win.classList.add('d-flex');
    }

    // Маленькая вышка В4
    if(Number(SmallMyScore3.innerText)<Number(SmallRivalScore0.innerText)) {
        SmallTagV4lose.classList.add('d-flex');
        SmallTagV4lose.classList.remove('d-none');
        SmallTagV4win.classList.add('d-none');
        SmallTagV4win.classList.remove('d-flex');
    } else {
        SmallTagV4lose.classList.remove('d-flex');
        SmallTagV4lose.classList.add('d-none');
        SmallTagV4win.classList.remove('d-none');
        SmallTagV4win.classList.add('d-flex');
    }

    // Средняя вышка В1
    if(Number(MediumMyScore0.innerText)<Number(MediumRivalScore4.innerText)) {
        MediumTagV1lose.classList.add('d-flex');
        MediumTagV1lose.classList.remove('d-none');
        MediumTagV1win.classList.add('d-none');
        MediumTagV1win.classList.remove('d-flex');
    } else {
        MediumTagV1lose.classList.remove('d-flex');
        MediumTagV1lose.classList.add('d-none');
        MediumTagV1win.classList.remove('d-none');
        MediumTagV1win.classList.add('d-flex');
    }

    // Средняя вышка В2
    if(Number(MediumMyScore1.innerText)<Number(MediumRivalScore3.innerText)) {
        MediumTagV2lose.classList.add('d-flex');
        MediumTagV2lose.classList.remove('d-none');
        MediumTagV2win.classList.add('d-none');
        MediumTagV2win.classList.remove('d-flex');
    } else {
        MediumTagV2lose.classList.remove('d-flex');
        MediumTagV2lose.classList.add('d-none');
        MediumTagV2win.classList.remove('d-none');
        MediumTagV2win.classList.add('d-flex');
    }

    // Средняя вышка В3
    if(Number(MediumMyScore2.innerText)<Number(MediumRivalScore2.innerText)) {
        MediumTagV3lose.classList.add('d-flex');
        MediumTagV3lose.classList.remove('d-none');
        MediumTagV3win.classList.add('d-none');
        MediumTagV3win.classList.remove('d-flex');
    } else {
        MediumTagV3lose.classList.remove('d-flex');
        MediumTagV3lose.classList.add('d-none');
        MediumTagV3win.classList.remove('d-none');
        MediumTagV3win.classList.add('d-flex');
    }

    // Средняя вышка В4
    if(Number(MediumMyScore3.innerText)<Number(MediumRivalScore1.innerText)) {
        MediumTagV4lose.classList.add('d-flex');
        MediumTagV4lose.classList.remove('d-none');
        MediumTagV4win.classList.add('d-none');
        MediumTagV4win.classList.remove('d-flex');
    } else {
        MediumTagV4lose.classList.remove('d-flex');
        MediumTagV4lose.classList.add('d-none');
        MediumTagV4win.classList.remove('d-none');
        MediumTagV4win.classList.add('d-flex');
    }

    // Средняя вышка В5
    if(Number(MediumMyScore4.innerText)<Number(MediumRivalScore0.innerText)) {
        MediumTagV5lose.classList.add('d-flex');
        MediumTagV5lose.classList.remove('d-none');
        MediumTagV5win.classList.add('d-none');
        MediumTagV5win.classList.remove('d-flex');
    } else {
        MediumTagV5lose.classList.remove('d-flex');
        MediumTagV5lose.classList.add('d-none');
        MediumTagV5win.classList.remove('d-none');
        MediumTagV5win.classList.add('d-flex');
    }

    // Большая вышка В1
    if(Number(BigMyScore0.innerText)<Number(BigRivalScore6.innerText)) {
        BigTagV1lose.classList.add('d-flex');
        BigTagV1lose.classList.remove('d-none');
        BigTagV1win.classList.add('d-none');
        BigTagV1win.classList.remove('d-flex');
    } else {
        BigTagV1lose.classList.remove('d-flex');
        BigTagV1lose.classList.add('d-none');
        BigTagV1win.classList.remove('d-none');
        BigTagV1win.classList.add('d-flex');
    }

    // Большая вышка В2
    if(Number(BigMyScore1.innerText)<Number(BigRivalScore5.innerText)) {
        BigTagV2lose.classList.add('d-flex');
        BigTagV2lose.classList.remove('d-none');
        BigTagV2win.classList.add('d-none');
        BigTagV2win.classList.remove('d-flex');
    } else {
        BigTagV2lose.classList.remove('d-flex');
        BigTagV2lose.classList.add('d-none');
        BigTagV2win.classList.remove('d-none');
        BigTagV2win.classList.add('d-flex');
    }

    // Большая вышка В3
    if(Number(BigMyScore2.innerText)<Number(BigRivalScore4.innerText)) {
        BigTagV3lose.classList.add('d-flex');
        BigTagV3lose.classList.remove('d-none');
        BigTagV3win.classList.add('d-none');
        BigTagV3win.classList.remove('d-flex');
    } else {
        BigTagV3lose.classList.remove('d-flex');
        BigTagV3lose.classList.add('d-none');
        BigTagV3win.classList.remove('d-none');
        BigTagV3win.classList.add('d-flex');
    }

    // Большая вышка В4
    if(Number(BigMyScore3.innerText)<Number(BigRivalScore3.innerText)) {
        BigTagV4lose.classList.add('d-flex');
        BigTagV4lose.classList.remove('d-none');
        BigTagV4win.classList.add('d-none');
        BigTagV4win.classList.remove('d-flex');
    } else {
        BigTagV4lose.classList.remove('d-flex');
        BigTagV4lose.classList.add('d-none');
        BigTagV4win.classList.remove('d-none');
        BigTagV4win.classList.add('d-flex');
    }3
    // Большая вышка В5
    if(Number(BigMyScore4.innerText)<Number(BigRivalScore2.innerText)) {
        BigTagV5lose.classList.add('d-flex');
        BigTagV5lose.classList.remove('d-none');
        BigTagV5win.classList.add('d-none');
        BigTagV5win.classList.remove('d-flex');
    } else {
        BigTagV5lose.classList.remove('d-flex');
        BigTagV5lose.classList.add('d-none');
        BigTagV5win.classList.remove('d-none');
        BigTagV5win.classList.add('d-flex');
    }

    // Большая вышка В4
    if(Number(BigMyScore5.innerText)<Number(BigRivalScore1.innerText)) {
        BigTagV6lose.classList.add('d-flex');
        BigTagV6lose.classList.remove('d-none');
        BigTagV6win.classList.add('d-none');
        BigTagV6win.classList.remove('d-flex');
    } else {
        BigTagV6lose.classList.remove('d-flex');
        BigTagV6lose.classList.add('d-none');
        BigTagV6win.classList.remove('d-none');
        BigTagV6win.classList.add('d-flex');
    }

    // Большая вышка В7
    if(Number(BigMyScore6.innerText)<Number(BigRivalScore0.innerText)) {
        BigTagV7lose.classList.add('d-flex');
        BigTagV7lose.classList.remove('d-none');
        BigTagV7win.classList.add('d-none');
        BigTagV7win.classList.remove('d-flex');
    } else {
        BigTagV7lose.classList.remove('d-flex');
        BigTagV7lose.classList.add('d-none');
        BigTagV7win.classList.remove('d-none');
        BigTagV7win.classList.add('d-flex');
    }





    // вывод сводки Вышка S

    if (limitScore>0) smallMaxScore.innerText = limitScore; else smallMaxScore.innerText = 0; //Лимит очков до конца

    //Еще очков для победы

    if (Math.ceil((limitScore+1+rivalScore-myScore)/2+10)>limitScore){
        ScoretoWin.innerText = 'Не возможно';
    } else if (Math.ceil((limitScore+1+rivalScore-myScore)/2)<0){
        ScoretoWin.innerText = 'Достигнуто';
        SummaryScoreWin.innerText = 'Достигнуто';
    } else {
        ScoretoWin.innerText = Math.ceil((limitScore+1+rivalScore-myScore)/2+10);
        SummaryScoreWin.innerText = myScore+Math.ceil((limitScore+1+rivalScore-myScore)/2+10);
    }



    }

updateUTC();

setInterval(updateUTC, 1000);
setInterval(EndTimer, 1000);


smallPointTab.addEventListener('click', function () {
    if (!smallPointTab.classList.contains('active-tab')) {
        calculateSection.classList.remove('d-none');
        calculateSection.classList.add('b-non-t-l');
        calculateSection.classList.remove('b-all');
        calculateSection.classList.remove('b-non-t-r');
        smallPoint.classList.remove('d-none');
        smallPoint.classList.add('d-flex');
        mediumPoint.classList.add('d-none');
        mediumPoint.classList.remove('d-flex');
        bigPoint.classList.add('d-none');
        bigPoint.classList.remove('d-flex');
    } else {
        calculateSection.classList.add('d-none');
        calculateSection.classList.remove('b-non-t-l');
    }

    smallPointTab.classList.toggle('active-tab');
    mediumPointTab.classList.remove('active-tab');
    bigPointTab.classList.remove('active-tab');
});

mediumPointTab.addEventListener('click', function () {
    if (!mediumPointTab.classList.contains('active-tab')) {
        calculateSection.classList.remove('d-none');
        calculateSection.classList.remove('b-non-t-l');
        calculateSection.classList.add('b-all');
        calculateSection.classList.remove('b-non-t-r');
        smallPoint.classList.add('d-none');
        smallPoint.classList.remove('d-flex');
        mediumPoint.classList.remove('d-none');
        mediumPoint.classList.add('d-flex');
        bigPoint.classList.add('d-none');
        bigPoint.classList.remove('d-flex');
    } else {
        calculateSection.classList.add('d-none');
        calculateSection.classList.remove('b-all');
    }

    smallPointTab.classList.remove('active-tab');
    mediumPointTab.classList.toggle('active-tab');
    bigPointTab.classList.remove('active-tab');
});

bigPointTab.addEventListener('click', function () {
    if (!bigPointTab.classList.contains('active-tab')) {
        calculateSection.classList.remove('d-none');
        calculateSection.classList.remove('b-non-t-l');
        calculateSection.classList.remove('b-all');
        calculateSection.classList.add('b-non-t-r');
        smallPoint.classList.add('d-none');
        smallPoint.classList.remove('d-flex');
        mediumPoint.classList.add('d-none');
        mediumPoint.classList.remove('d-flex');
        bigPoint.classList.remove('d-none');
        bigPoint.classList.add('d-flex');
    } else {
        calculateSection.classList.add('d-none');
        calculateSection.classList.remove('b-non-t-r');
    }
    smallPointTab.classList.remove('active-tab');
    mediumPointTab.classList.remove('active-tab');
    bigPointTab.classList.toggle('active-tab');
});


function checkEmpty(input, defaultValue) {
    if (input.value.trim()==="") {
        input.value = defaultValue;
    }
}

function addOneScore(seconds) {
    return Math.trunc(seconds/60)*1;
}

function addTwoScore(seconds) {
    return Math.trunc(seconds/60)*2;
}

function addThreeScore(seconds) {
    return Math.trunc(seconds/60)*3;
}

function addFourScore(seconds) {
    return Math.trunc(seconds/60)*4;
}

function addFiveScore(seconds) {
    return Math.trunc(seconds/60)*5;
}

function addSixScore(seconds) {
    return Math.trunc(seconds/60)*6;
}


