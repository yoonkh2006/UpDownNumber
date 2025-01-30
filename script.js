// 비저벌리티랑 텍스트콘텐트 활용에 일관성없음요

const feedback = document.getElementById("feedback");    //업다운 표시
const finish = document.getElementById("finish");   //시도횟수랑 재도전버튼 묶어놓은거
const attempts = document.getElementById("attempts");    //시도 횟수 표시
const guess = document.getElementById("guess");    //입력창
const retryBtn = document.getElementById("retry");    //재도전버튼
const record = document.getElementById("record");   //최고기록 표시

let cnt = 0;    //시도횟수
let goal = Math.floor(Math.random() * 1000) + 1;    //답을 1부터 1000사이의 난수로 설정
let new_record = -1;

function pressEnter(event) {    //키 입력 감지? 지피티가 이렇게 하라했음
  if (event.key === "Enter") {    //엔터키눌렸을때
    let input_num = parseInt(guess.value);   //입력창에서 값 받아오기
    guess.value = "";
    if (!isNaN(input_num)) {    //isNaN() : 매개변수가 난인지 아닌지 판단해주는 함수. 앞에 !붙여서 난이 아닐때만실행
      if (input_num < 1000 && input_num > 0) {    //범위가지기
        if (input_num === goal) {
          cnt += 1;
          feedback.style.color = "#2e2e2e";
          feedback.textContent = `${goal} 정답!`;
          finish.style.visibility = "visible"
          attempts.textContent = `시도 횟수 : ${cnt}회`;
          guess.style.visibility = "hidden";    //자리는 차지하면서 보이지만 않게하기(플박때문)
          if (new_record === -1 || cnt < new_record){   //최고기록 로직
            new_record = cnt;
            record.textContent = `최고기록 : ${new_record}회`;
          }
        }
        else if (input_num > goal) {
          cnt += 1;
          feedback.style.color = "#2e2e2e";
          feedback.textContent = `${input_num} 다운`;
        }
        else {
          cnt += 1;
          feedback.style.color = "#2e2e2e";
          feedback.textContent = `${input_num} 업`;
        }
      }
      else {
        feedback.style.color = "red";
        feedback.textContent = `${input_num}? 야!`;
      }
    }
    else{
      feedback.style.color = "#2e2e2e";
      feedback.textContent = "ㅋㅋ";
    }
  }
}

function digitsLimit(){   //챗지피티가 알려준 자릿수 제한방법
  if (guess.value.length > 4){
    guess.value = guess.value.slice(0, 4);
  }
}

retryBtn.onclick = function(){    //재도전버튼 눌렸을때
  cnt = 0;
  goal = Math.floor(Math.random() * 1000) + 1;
  finish.style.visibility = "hidden";
  feedback.textContent = "";
  guess.style.visibility = "visible";
}

guess.addEventListener("keypress", pressEnter);    //이벤트 리스너 추가...라고 하네요;
guess.addEventListener("input", digitsLimit);
