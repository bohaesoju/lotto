const shupple : number[] = [];
const lottoNumbers2 : number[] = [];
const boll : HTMLDivElement = document.createElement('div');
const bonusCell : HTMLElement = document.querySelector('.bonus');
const makeButton : HTMLElement = document.querySelector('#makeButton');
let flag : boolean = true;
//로또번호 생성
function init(){
    result.innerHTML = '';
    bonusCell.innerHTML = '';
    for(let i = 1; i <= 45; i += 1){
        lottoNumbers2.push(i);
    }
    while(lottoNumbers2.length > 0){
        const moveValue = lottoNumbers2.splice(Math.floor(Math.random() * lottoNumbers2.length), 1)[0];
        shupple.push(moveValue);
    }
}

//버튼 클릭시 번호 생성
makeButton.addEventListener("click",() => {
    if(flag === true){
        init();
        makeNumber();
        flag = false;
    }
})

/* 번호 셔플 */
let bonus : number;
let winNumber : number[];
let sortNum : number[];
const result : HTMLElement = document.querySelector('#result');
const boolStyle = (i: number, e: any) => {
    const boll : HTMLDivElement = document.createElement('div');
    let bgcolor : string;
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
    let inum : string = i.toString();
    boll.textContent = inum;
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
    bonus = shupple[shupple.length - 1];
    winNumber = shupple.slice(0, 6);
    sortNum = winNumber.sort((a : number, b : number) => a - b)

    for(let i = 0; i < winNumber.length; i += 1){
        setTimeout(() => {
            boolStyle(winNumber[i],result)
        }, (i + 1) * 1000);
    }
    setTimeout(() => {
        boolStyle(bonus,bonusCell);
        flag = true;
    }, 7000);
};