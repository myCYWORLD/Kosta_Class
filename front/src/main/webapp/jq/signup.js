$(function(){
    //가입버튼객체찾기
    let $btSubmit = $('button[type=submit]');
  
    //--아이디중복확인버튼 클릭 START--
    let $btIdupchk = $('button.iddupchk');
    $btIdupchk.click(function(){
      $btSubmit.show();
    })
    //--아이디중복확인버튼 클릭 END--
    
    //--아이디입력란에 포커스 START--
    let $inputId = $('input[name=id]');
    $inputId.focus(function(){
      $btSubmit.hide();
    });
    //--아이디입력란에 포커스 END--

    let $btSearch = $('button.searchzip');
    $btSearch.click(function (){
        window.open('http://localhost:8888/front/html/searchzip.html', '_blank', 
                    'width=800, height=500');
    });
    
    //--폼 전송 START --
    //가입버튼클릭이벤트발생->폼서브밋이벤트발생->기본처리(전송)
    //폼객체찾기
    let $form = $('form');
    $form.submit(function(){
      // alert('submit start');
      //비밀번호 일치확인
      let $pwd = $('input[name=pwd]');
      let $pwd1 = $('input[name=pwd1]');
      if($pwd.val() != $pwd1.val()){
        alert('비밀번호가 일치하지 않습니다');
        $pwd.focus();
        return false; 
      }  
      let url = 'http://localhost:8888/back/signup';
      let data = $(this).serialize(); //querystring만들어줌
                  //ex)id=a&pwd=1&name=b&addr=c&buildingno=1
                  
      // alert(data);
      $.ajax({
        url: url,
        method: 'post',
        data: data,
        success:function(jsonObj){
          // let jsonObj = JSON.parse(responseText);
          alert(jsonObj.msg);
        },
        error : function(jqXHR){
          alert('에러코드:' + jqXHR.status);
        }
      });
      return false; 
      
    });
    //—폼 전송 END—
  });


// $(function(){
// //가입버튼 클릭 이벤트 발생 -> 폼서브밋 이벤트 발생 -> 기본처리(전송)
// //폼객체찾기
//     let $form = $('form');
//     $form.submit(function() {
//     //비밀번호 일치확인
//     let $pwd = $('input[name=p]');
//     let $pwd1 = $('input[name=p_1]');
//     if($pwd.val() != $pwd1.val()){
//         alert('비밀번호가 일치하지 않습니다');
//         // $pwd.select();
//         $pwd.focus();
//         return false;    
//     }
 
//     let idValue = $('input[name=t1]').val(); //아이디 입력값
//     let nameValue = $('input[name=t2]').val(); //이름 입력값
//     let addrValue = $('input[name=t3]').val(); //주소 입력값
//     let buildingnoValue = $('input[name=buildingno]').val(); //건물번호 입력값
    
    
//     //    {id: idValue, 
//     //     pwd: $pwd.val(),
//     //     name: nameValue,
//     //     addr: addrValue,
//     //     buildingno: buildingnoValue
//     //     };
//     let url = "http://localhost:8888/back/jsp/signup.jsp";
//     let data = $(this).serialize(); //querystring 만들어줌
//                 //"id=id1&pwd=p1&name=n1&add=a1"->문자열로 만들기 보다 객체로 만드는게 좋음
//     alert(data);
//     $.ajax({
//     url: url,
//     method: 'post',
//     data: data,
//     success: function(responseText){
//         let jsonObj = JSON.parse(responseText);
//         alert(jsonObj.msg);
//     },
//     error: function(jqXHR){
//         alert('에러코드:' + jqXHR.status);
//     }
//     });
//     return false;


//     });
// });
