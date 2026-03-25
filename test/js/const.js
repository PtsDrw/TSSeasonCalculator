const smallPointTab = document.getElementById('smallpointtab');
const mediumPointTab = document.getElementById('mediumpointtab');
const bigPointTab = document.getElementById('bigpointtab');
const calculateSection = document.getElementById('calculateSection');
const smallPoint = document.getElementById('smallPoint');
const mediumPoint = document.getElementById('mediumPoint');
const bigPoint = document.getElementById('bigPoint');
const timeUTC = document.getElementById('timeUTC');

const infoBtn = document.querySelector('.info');
const popup = document.querySelector('.popup');
const popupHeader = document.querySelector('.popup-header');
const popupClose = document.querySelector('.popup-close');

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
const smallScoretoWin = document.getElementById('smallScoretoWin');
const smallSummaryScoreWin = document.getElementById('smallSummaryScoreWin');
const mediumMaxScore = document.getElementById('mediumMaxScore');
const mediumScoretoWin = document.getElementById('mediumScoretoWin');
const mediumSummaryScoreWin = document.getElementById('mediumSummaryScoreWin');
const bigMaxScore = document.getElementById('bigMaxScore');
const bigScoretoWin = document.getElementById('bigScoretoWin');
const bigSummaryScoreWin = document.getElementById('bigSummaryScoreWin');


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


const themeBar = document.getElementById('themeBar');
const themeS1 = document.getElementById('themeS1');
const themeS2 = document.getElementById('themeS2');
const themeS3 = document.getElementById('themeS3');


//блоки использующие тему
const bgGradient = document.getElementById('bgGradient');
const bodyFontColor = document.getElementById('bodyFontColor');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const pointHeaders = document.querySelectorAll('.point-header, .SummaryHeader, .popup-header');
const pointBodys = document.querySelectorAll('.point-body, .SummaryBody');

//Чекбоксы
const checkBoxLose = document.getElementById('typeLose');
const checkBoxWin = document.getElementById('typeWin');