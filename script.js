const shupple = [];
const boll = document.createElement('div');
const bonusCell = document.querySelector('.bonus');

/* 45개의 배열생성 */
// const lottoNumbers = Array(45).fill().map(function(e, i){
//     return i + 1;
// });

const lottoNumbers2 = []
for(let i = 1; i <= 45; i += 1){
    lottoNumbers2.push(i);
}

/* 번호 셔플 */
while(lottoNumbers2.length > 0){
    const moveValue = lottoNumbers2.splice(Math.floor(Math.random() * lottoNumbers2.length), 1)[0];
    shupple.push(moveValue);
}

const bonus = shupple[shupple.length - 1];
const winNumber = shupple.slice(0, 6);
const sortNum = winNumber.sort(function(a, b) { return a -  b })
const result = document.querySelector('#result');
const boolStyle = (i, e) => {
    const boll = document.createElement('div');
    let bgcolor;
    if( i <= 10 ){
        bgcolor = 'red';
    } else if ( i <= 20 ) {
        bgcolor = 'orange';
    } else if ( i <= 30 ) {
        bgcolor = 'black';
    } else if ( i <= 40 ) {
        bgcolor = 'blue';
    } else {
        bgcolor = 'green';
    }
    boll.textContent = i;
    // boll.style.display = 'inline-block';
    boll.style.border = '1px solid black';
    boll.style.borderRadius = '50%';
    boll.style.width = '50px'
    boll.style.height = '50px'
    boll.style.lineHeight = '52px'
    boll.style.textAlign = 'center'
    boll.style.margin = '0 auto 20px'
    boll.style.fontSize = '30px'
    boll.style.background = bgcolor;
    e.appendChild(boll);
}

function makeNumber() {
    for(let i = 0; i < winNumber.length; i += 1){
        setTimeout(() => {
            boolStyle(winNumber[i],result)
        }, (i + 1) * 1000);
    }
    setTimeout(() => {
        boolStyle(bonus,bonusCell)
    }, 7000);
};
makeNumber()

