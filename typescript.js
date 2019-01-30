var shupple = [];
var lottoNumbers2 = [];
var boll = document.createElement('div');
var bonusCell = document.querySelector('.bonus');
var makeButton = document.querySelector('#makeButton');
var flag = true;
//로또번호 생성
function init() {
    result.innerHTML = '';
    bonusCell.innerHTML = '';
    for (var i = 1; i <= 45; i += 1) {
        lottoNumbers2.push(i);
    }
    while (lottoNumbers2.length > 0) {
        var moveValue = lottoNumbers2.splice(Math.floor(Math.random() * lottoNumbers2.length), 1)[0];
        shupple.push(moveValue);
    }
}
//버튼 클릭시 번호 생성
makeButton.addEventListener("click", function () {
    if (flag === true) {
        init();
        makeNumber();
        flag = false;
    }
});
/* 번호 셔플 */
var bonus;
var winNumber;
var sortNum;
var result = document.querySelector('#result');
var boolStyle = function (i, e) {
    var boll = document.createElement('div');
    var bgcolor;
    if (i <= 10) {
        bgcolor = 'red';
    }
    else if (i <= 20) {
        bgcolor = 'orange';
    }
    else if (i <= 30) {
        bgcolor = 'black';
    }
    else if (i <= 40) {
        bgcolor = 'blue';
    }
    else {
        bgcolor = 'green';
    }
    var inum = i.toString();
    boll.textContent = inum;
    // boll.style.display = 'inline-block';
    boll.style.border = '1px solid black';
    boll.style.borderRadius = '50%';
    boll.style.width = '50px';
    boll.style.height = '50px';
    boll.style.lineHeight = '52px';
    boll.style.textAlign = 'center';
    boll.style.margin = '0 auto 20px';
    boll.style.fontSize = '30px';
    boll.style.background = bgcolor;
    e.appendChild(boll);
};
function makeNumber() {
    bonus = shupple[shupple.length - 1];
    winNumber = shupple.slice(0, 6);
    sortNum = winNumber.sort(function (a, b) { return a - b; });
    var _loop_1 = function (i) {
        setTimeout(function () {
            boolStyle(winNumber[i], result);
        }, (i + 1) * 1000);
    };
    for (var i = 0; i < winNumber.length; i += 1) {
        _loop_1(i);
    }
    setTimeout(function () {
        boolStyle(bonus, bonusCell);
        flag = true;
    }, 7000);
}
;
