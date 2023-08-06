//요소 가져오기
const front_button = document.getElementById("front_button");
const back_button = document.getElementById("back_button");
const front = document.getElementById("front");
const back = document.getElementById("back");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const result = document.getElementById("result");

//변수 선언
const HIDDEN = "hidden"
const percent = [1,1,1,1,1,0,0,0,0,0]; // 확률 조정
let resultlist = [];

function reset() { //클래스 초기화
    front.classList.add(HIDDEN);
    back.classList.add(HIDDEN);
    correct.classList.add(HIDDEN);
    incorrect.classList.add(HIDDEN);
}

function resultmaking(a) { //결과 저장
    if (a == 'c') {
        resultlist.unshift('O');
    } else if (a == 'i') {
        resultlist.unshift('X');
    }
    result.innerText = resultlist;
}

function randomchooseF(event) { //앞면 버튼 판정
    event.preventDefault();
    reset();
    let rand = Math.floor(Math.random() * 10);
    console.log(rand);
    if (percent[rand] == 1) {
        front.classList.remove(HIDDEN);
        correct.classList.remove(HIDDEN);
        resultmaking('c');
    } else {
        back.classList.remove(HIDDEN);
        incorrect.classList.remove(HIDDEN);
        resultmaking('i');
    }
}

function randomchooseB(event) { //뒷면 버튼 판정
    event.preventDefault();
    reset();
    let rand = Math.floor(Math.random() * 10);
    if (percent[rand] == 1) {
        back.classList.remove(HIDDEN);
        correct.classList.remove(HIDDEN);
        resultmaking('c');
    } else {
        front.classList.remove(HIDDEN);
        incorrect.classList.remove(HIDDEN);
        resultmaking('i');
    }
}

//버튼 이벤트 설정
front_button.addEventListener("click", randomchooseF);
back_button.addEventListener("click", randomchooseB);