$(function () {
  //--아이디 입력객체찾기
  let $inputId = $("input[name=t1]");

  //비밀번호입력 객체찾기
  let $inputPwd = $("input[name=pwd]");

  //form 전송 START
  let $form = $("form");
  $form.submit(function () {
    let url = "http://localhost:8888/back/login";
    let inputIdValue, inputPwdValue;
    inputIdValue = $inputId.val(); //사용자가 입력해준 아이디값
    inputPwdValue = $inputPwd.val(); //사용자가 입력해준 비밀번호값

    let data = "id=" + inputIdValue + "&pwd=" + inputPwdValue;
    // // 단순 jquery로 작성한 코드--------------
    // $('section>article:first').load(url, data, function(responseText, statusText, xhr){
    //     if(statusText != "success") {  // 응답 오류인 경우
    //         alert(xhr.status + ':' + xhr.statusText);
    //     }else{   //응답 성공인 경우
    //         let jsonObj = JSON.parse(responseText); //{status:1} 문자열을 json객체로 변환
    //         if(jsonObj.status == 1){ //로그인 성공된 경우

    //         }else if(jsonObj.tatus == 2){//로그인 실패된 경우
    //             alert('로그인 실패');
    //         }
    //     }
    // });

    // 위의 내용을 ajax로 바꾼 코드--------------
    $.ajax({
      url: url,
      method: "post",
      data: data,
      /*success: function(responseText) {
		let jsonObj = JSON.parse(responseText);*/
      success: function (jsonObj) {
        if (jsonObj.status == 1) {
          //로그인 성공
          location.href = "";
        } else {
          //로그인 실패
          alert("로그인 실패");
        }
        // $('section>article:first').html(responseText);
      },
      error: function (jqXHR, status, errorThrown) {
        alert(jqXHR.status + ": " + jqXHR.statusText); // error alert 하기
      },
    });
    return false;
  });
  $(document).ready(function () {
    // 아이디 저장 체크박스 객체 찾기
    let $cb = $("input[type=checkbox]");

    // 로그인 버튼 객체 찾기
    let $loginBtn = $("button[type=submit]");
  });
});
