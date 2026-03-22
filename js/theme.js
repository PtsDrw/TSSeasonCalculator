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
const pointHeaders = document.querySelectorAll('.point-header');
const pointBodys = document.querySelectorAll('.point-body');


setThemeS2();



themeBar.addEventListener('click', function (){
    themeBar.classList.toggle('active');
    if (themeBar.classList.contains('active')){
        themeS1.classList.remove('d-none');
        themeS1.classList.add('d-flex');
        themeS2.classList.remove('d-none');
        themeS2.classList.add('d-flex');
        themeS3.classList.remove('d-none');
        themeS3.classList.add('d-flex');
    }
    else {
        themeS1.classList.add('d-none');
        themeS1.classList.remove('d-flex');
        themeS2.classList.add('d-none');
        themeS2.classList.remove('d-flex');
        themeS3.classList.add('d-none');
        themeS3.classList.remove('d-flex');
    }

});


function setThemeS1(){
    //приминение темы 1
    themeBar.classList.add('brush-color-s1');
    bgGradient.classList.add('bg-gradient-s1');
    bodyFontColor.classList.add('font-s1');
    title1.classList.add('bg-title-s1');
    title2.classList.add('bg-title-s1');
    container1.classList.add('bg-container-s1');
    container2.classList.add('bg-container-s1');
    input1.classList.add('myscore-input-s1');
    input2.classList.add('opponentscore-input-s1');
    smallPointTab.classList.add('bg-tabs-s1');
    mediumPointTab.classList.add('bg-tabs-s1');
    bigPointTab.classList.add('bg-tabs-s1');
    calculateSection.classList.add("border-s1");
    calculateSection.classList.add('bg-container-s1');
    pointHeaders.forEach(el => {
        el.classList.add('point-header-s1')
    });
    pointBodys.forEach(el => {
        el.classList.add('point-body-s1')
    });
    //очистка темы 2
    themeBar.classList.remove('brush-color-s2');
    bgGradient.classList.remove('bg-gradient-s2');
    bodyFontColor.classList.remove('font-s2');
    title1.classList.remove('bg-title-s2');
    title2.classList.remove('bg-title-s2');
    container1.classList.remove('bg-container-s2');
    container2.classList.remove('bg-container-s2');
    input1.classList.remove('myscore-input-s2');
    input2.classList.remove('opponentscore-input-s2');
    smallPointTab.classList.remove('bg-tabs-s2');
    mediumPointTab.classList.remove('bg-tabs-s2');
    bigPointTab.classList.remove('bg-tabs-s2');
    calculateSection.classList.remove("border-s2");
    calculateSection.classList.remove('bg-container-s2');
    pointHeaders.forEach(el => {
        el.classList.remove('point-header-s2')
    });
    pointBodys.forEach(el => {
        el.classList.remove('point-body-s2')
    });
    //очистка темы 3
    themeBar.classList.remove('brush-color-s3');
    bgGradient.classList.remove('bg-gradient-s3');
    bodyFontColor.classList.remove('font-s3');
    title1.classList.remove('bg-title-s3');
    title2.classList.remove('bg-title-s3');
    container1.classList.remove('bg-container-s3');
    container2.classList.remove('bg-container-s3');
    input1.classList.remove('myscore-input-s3');
    input2.classList.remove('opponentscore-input-s3');
    smallPointTab.classList.remove('bg-tabs-s3');
    mediumPointTab.classList.remove('bg-tabs-s3');
    bigPointTab.classList.remove('bg-tabs-s3');
    calculateSection.classList.remove("border-s3");
    calculateSection.classList.remove('bg-container-s3');
    pointHeaders.forEach(el => {
        el.classList.remove('point-header-s3')
    });
    pointBodys.forEach(el => {
        el.classList.remove('point-body-s3')
    });
}

function setThemeS2(){
    //приминение темы 2
    themeBar.classList.add('brush-color-s2');
    bgGradient.classList.add('bg-gradient-s2');
    bodyFontColor.classList.add('font-s2');
    title1.classList.add('bg-title-s2');
    title2.classList.add('bg-title-s2');
    container1.classList.add('bg-container-s2');
    container2.classList.add('bg-container-s2');
    input1.classList.add('myscore-input-s2');
    input2.classList.add('opponentscore-input-s2');
    smallPointTab.classList.add('bg-tabs-s2');
    mediumPointTab.classList.add('bg-tabs-s2');
    bigPointTab.classList.add('bg-tabs-s2');
    calculateSection.classList.add("border-s2");
    calculateSection.classList.add('bg-container-s2');
    pointHeaders.forEach(el => {
        el.classList.add('point-header-s2')
    });
    pointBodys.forEach(el => {
        el.classList.add('point-body-s2')
    });
    //очистка темы 3
    themeBar.classList.remove('brush-color-s3');
    bgGradient.classList.remove('bg-gradient-s3');
    bodyFontColor.classList.remove('font-s3');
    title1.classList.remove('bg-title-s3');
    title2.classList.remove('bg-title-s3');
    container1.classList.remove('bg-container-s3');
    container2.classList.remove('bg-container-s3');
    input1.classList.remove('myscore-input-s3');
    input2.classList.remove('opponentscore-input-s3');
    smallPointTab.classList.remove('bg-tabs-s3');
    mediumPointTab.classList.remove('bg-tabs-s3');
    bigPointTab.classList.remove('bg-tabs-s3');
    calculateSection.classList.remove("border-s3");
    calculateSection.classList.remove('bg-container-s3');
    pointHeaders.forEach(el => {
        el.classList.remove('point-header-s3')
    });
    pointBodys.forEach(el => {
        el.classList.remove('point-body-s3')
    });
    //очистка темы 1
    themeBar.classList.remove('brush-color-s1');
    bgGradient.classList.remove('bg-gradient-s1');
    bodyFontColor.classList.remove('font-s1');
    title1.classList.remove('bg-title-s1');
    title2.classList.remove('bg-title-s1');
    container1.classList.remove('bg-container-s1');
    container2.classList.remove('bg-container-s1');
    input1.classList.remove('myscore-input-s1');
    input2.classList.remove('opponentscore-input-s1');
    smallPointTab.classList.remove('bg-tabs-s1');
    mediumPointTab.classList.remove('bg-tabs-s1');
    bigPointTab.classList.remove('bg-tabs-s1');
    calculateSection.classList.remove("border-s1");
    calculateSection.classList.remove('bg-container-s1');
    pointHeaders.forEach(el => {
        el.classList.remove('point-header-s1')
    });
    pointBodys.forEach(el => {
        el.classList.remove('point-body-s1')
    });
}

function setThemeS3(){
    //приминение темы 3
    themeBar.classList.add('brush-color-s3');
    bgGradient.classList.add('bg-gradient-s3');
    bodyFontColor.classList.add('font-s3');
    title1.classList.add('bg-title-s3');
    title2.classList.add('bg-title-s3');
    container1.classList.add('bg-container-s3');
    container2.classList.add('bg-container-s3');
    input1.classList.add('myscore-input-s3');
    input2.classList.add('opponentscore-input-s3');
    smallPointTab.classList.add('bg-tabs-s3');
    mediumPointTab.classList.add('bg-tabs-s3');
    bigPointTab.classList.add('bg-tabs-s3');
    calculateSection.classList.add("border-s3");
    calculateSection.classList.add('bg-container-s3');
    pointHeaders.forEach(el => {
        el.classList.add('point-header-s3')
    });
    pointBodys.forEach(el => {
        el.classList.add('point-body-s3')
    });
    //очистка темы 2
    themeBar.classList.remove('brush-color-s2');
    bgGradient.classList.remove('bg-gradient-s2');
    bodyFontColor.classList.remove('font-s2');
    title1.classList.remove('bg-title-s2');
    title2.classList.remove('bg-title-s2');
    container1.classList.remove('bg-container-s2');
    container2.classList.remove('bg-container-s2');
    input1.classList.remove('myscore-input-s2');
    input2.classList.remove('opponentscore-input-s2');
    smallPointTab.classList.remove('bg-tabs-s2');
    mediumPointTab.classList.remove('bg-tabs-s2');
    bigPointTab.classList.remove('bg-tabs-s2');
    calculateSection.classList.remove("border-s2");
    calculateSection.classList.remove('bg-container-s2');
    pointHeader.classList.remove('point-header-s2');
    pointBody.classList.remove('point-body-s2');
    pointHeaders.forEach(el => {
        el.classList.remove('point-header-s2')
    });
    pointBodys.forEach(el => {
        el.classList.remove('point-body-s2')
    });
    //очистка темы 1
    themeBar.classList.remove('brush-color-s1');
    bgGradient.classList.remove('bg-gradient-s1');
    bodyFontColor.classList.remove('font-s1');
    title1.classList.remove('bg-title-s1');
    title2.classList.remove('bg-title-s1');
    container1.classList.remove('bg-container-s1');
    container2.classList.remove('bg-container-s1');
    input1.classList.remove('myscore-input-s1');
    input2.classList.remove('opponentscore-input-s1');
    smallPointTab.classList.remove('bg-tabs-s1');
    mediumPointTab.classList.remove('bg-tabs-s1');
    bigPointTab.classList.remove('bg-tabs-s1');
    calculateSection.classList.remove("border-s1");
    calculateSection.classList.remove('bg-container-s1');
    pointHeaders.forEach(el => {
        el.classList.remove('point-header-s1')
    });
    pointBodys.forEach(el => {
        el.classList.remove('point-body-s1')
    });
}



themeS1.addEventListener('click', function (){
    setThemeS1();
});

themeS2.addEventListener('click', function (){
    setThemeS2();
});

themeS3.addEventListener('click', function (){
    setThemeS3();
});



