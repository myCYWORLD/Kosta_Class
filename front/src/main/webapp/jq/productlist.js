$(function () {
  $.ajax({
    // 1번작업 비동기 일처리 (url 요청하러 갔을 때 결과가 success면 콜백함수 호출)
    url: "http://localhost:8888/back/productlist",
    success: function (jsonObj) {
      //jsonObj은 배열형태, 반복처리하면서
      //div.td객체를 DOM트리에서 찾아 복사 붙여넣기
      //붙여넣기한 div.td객체의 img객체의 hreg속성값을 상품번호.jpg alt속성값을 상품명으로 설정
      let $tdObj = $("div.td");

      $(jsonObj).each(function (index, item) {
        console.log(
          item.prod_no + ":" + item.prod_name + ":" + item.prod_price
        );

        let $copyObj = $tdObj.clone(); //객체 복제
        let $imgObj = $copyObj.find("img"); //imgObj변수에 copyObj
        $imgObj.attr("src", "../images/" + item.prod_no + ".jpg");
        $imgObj.attr("alt", item.prdo_name);
        $copyObj.find("li.prod_name").html(item.prod_name);

        $("div.table").append($copyObj); //붙여넣기
      });
      $tdObj.hide();
    },
    error: function (jqXHR) {
      alert("오류:" + jqXHR.status); //404, 500, 200 JSON문자열 문제
    },
  });

  let $tableObj = $("div.table");
  //div.td객체 찾기  -> 2번작업은 1번작업의 결과가 나오던지 말던지 일 함
  let $tdObj = $("div.td");
  //--div.td객체 클릭 START--
  //   $tdObj.click(function () {  //on메서드 앞에 오는 객체는 현재 돔트리에 존재하는 객체.
  $tableObj.on("click", "div.td", function () {
    let src = $(this).find("img").attr("src"); // ../images/C0001.jpg
    console.log("src", src);
    let arr = src.split("/");
    console.log("arr", arr);
    let prod_no = arr[arr.length - 1].split(".")[0]; //C0001.jpg
    console.log("prod_no", prod_no);
    //location.href = "http://localhost:8888/back/viewproduct?prod_no=" + prod_no;
    location.href = "/front/html/viewproduct.html?prod_no=" + prod_no;
  });
  //--div.td객체 클릭  END --
});
