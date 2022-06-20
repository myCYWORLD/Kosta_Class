$(function () {
window.location.search;
let queryString = location.search.substring(1);
$.ajax({
	url: "/back/viewproduct",
	method: "get",
	//data: "prod_no=" + "C0001",
	data: queryString,
	success: function (jsonObj) {
	if (jsonObj.status == 1) {
		let prod_no = jsonObj.p.prodNo;
		let prod_name = jsonObj.p.prodName;
		let prod_price = jsonObj.p.prodPrice;
		let prod_mfd = jsonObj.p.prodMfd;
		let prod_info = jsonObj.p.prodInfo;
		$("div.viewproduct>img").attr("src", "../images/" + prod_no + ".jpg");
		//;

		$("div.viewproduct ul>li>span.prod_no").html(prod_no);
		$("div.viewproduct ul>li>span.prod_name").html(prod_name);
		$("div.viewproduct ul>li>span.prod_price").html(prod_price);
		$("div.viewproduct ul>li>span.prod_mfd").html(prod_mfd);
		$("div.viewproduct ul>li>span.prod_info").html(prod_info);
	} else {
		alert(jsonObj.msg);
	}
	},
	error: function (jqXHR) {
	alert("오류:" + jqXHR.status);
	},
});
//----장바구니 버튼 클릭START-----
$("div.viewproduct ul>li>button").click(function () {
	let prod_no = $("div.viewproduct ul>li>span.prod_no");
	let quanitity = $("div.viewproduct ul>li>input[name=quantity]").val();
	$.ajax({
	url: "/back/addcart",
	method: "get",
	data: { prod_no: prod_no, quantity: quantity },
	success: function () {
		$("div.viewproduct div.result").show();
	},
	error: function (jqXHR) {
		alert("오류:" + jqXHR);
	},
	});
	return false;
});
//----장바구니 버튼 클릭 END -----
});
