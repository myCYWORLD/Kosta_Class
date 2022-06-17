$(function () {
  //로그인 여부 확인할 서블릿 요청 응답형태 {status:1} --이미 로그인 된 경우
  //응답형태{status:1} 이미 로그인 된 경우
  //          header>nav>a를 로그아웃
  //<a href="login.html">로그인</a>
  //<a href="/back/logout">로그아웃</a>
  //<a href="productlist.html">상품</a>
  //<a href="viewcart.html">장바구니</a>
  let url = "/back/loginstatus";
  let method = "get";
  $.ajax({
    url: url,
    method: method,
    success: function (jsonObj) {
      let $navObj = $("header>nav");
      let $navObjHtml = "";
      if (jsonObj.status == 1) {
        //로그인된 경우
        $navObjHtml += '<a href= "/back/logout">로그아웃</a>';
      } else {
        //로그인 안 된 경우
        $navObjHtml += '<a href="login.html">로그인</a>';
        $navObjHtml += '<a href="signup.html">가입</a>';
      }
      $navObjHtml += '<a href="productlist.html">상품</a>';
      $navObjHtml += '<a href="viewcart.html">장바구니</a>';
      $navObj.html($navObjHtml);
    },
    error: function (jqXHP) {
      alert("오류" + jqXHP.status);
    },
  });

  // 그 외 - 로그인 안된 상태
  //          header>nav>a 를 로그인, 가입

  //-메뉴 객체들 찾기
  let $menuObj = $("header>nav>a");
  //section의 첫번째 자식요소인 article 객체 찾기
  let $articleObj = $("section>article:first");

  //-----메뉴 클릭 START-----
  //메뉴가 클릭되면 article 영역의 innerHTML로 로드
  //  $menuObj.click(function () {
  $("header > nav").on("click", "a", function () {
    let url = $(this).attr("href");
    let title = $(this).html();
    $articleObj.load(url, function (respenseText, statusText, xhr) {
      if (statusText != "success") {
        //alert(xhr.status + ":" + xhr.statusText);
        if (xhr.status == 404) {
          let msg = title + " 자원을 찾을 수 없습니다";
          alert(msg);
        }
      }
      if (url == "/back/logout") {
        location.href = "";
      }
    });
    return false;
  });
  //-----메뉴 클릭  END -----
});
