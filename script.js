var feedback = document.querySelector("#feedback"); //<p> feedback 가져오기
var button = document.querySelector("#submit"); //<p> submit 가져오기
var attempts = document.querySelector("#attempts"); //<p> attempts 가져오기
var cnt = 0;
var goal = Math.floor(Math.random() * 1000) + 1; //1부터 1000사이의 난수 생성

button.onclick = function () {  //버튼 눌렸을 때
  let input_num = document.querySelector("#guess").value; //사용자 입력 받기

  if (input_num == goal) {
    feedback.textContent = `성공!\n답: ${goal}`;
    cnt += 1;
    attempts.textContent = `시도횟수: ${cnt}회`;
  }

  else if (input_num > goal) {
    feedback.textContent = "다운";
    cnt += 1;
  }

  else {
    feedback.textContent = "업";
    cnt += 1;
  }
}



