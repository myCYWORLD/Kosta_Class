$(function() {

	$.ajax({
		url:"/back/vieworder",
		success:function(jsonObj) {
			let $order_dt = info.orderDtl;
			$copyObj.find('div.order_dt').html(order_no);
			
			let lines = info.lines;
			$(lines).each(function(line, index) {
			
				let $copyObj = $lneObj.clone();
				let p = line.oderP;
				let order_quantity = line.orderQuantity;
				$copyLinObj.find("order_product > dis.prod_no");
				$copyLinObj.find("order_product > dis.prod_name");
				$copyLinObj.find("order_product > dis.prod_price");
				$copyLinObj.find("order_quantity").html(order_prdocut);
				$copyObj.append($copyLineObj);
			});
			$orderObj.append($copyObj);

		}
		error:function(jqXHR) {
			alert('오류:' + jqXHR.status);
		}

	});

});