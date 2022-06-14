$(function () {
  $.ajax({
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
        let $imgObj = $copyObj.find("img");
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
});
