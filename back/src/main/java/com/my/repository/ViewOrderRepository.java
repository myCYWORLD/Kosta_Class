package com.my.repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.my.dto.OrderInfo;
import com.my.dto.OrderLine;
import com.my.dto.Product;
import com.my.exception.FindException;
import com.my.sql.MyConnection;

public class ViewOrderRepository {
	public List<OrderInfo> selectById(String orderId) throws FindException {
 		Connection con = null;
 		PreparedStatement pstmt = null;
 		ResultSet rs = null;
 		String viewOrder = "SELECT * FROM ORDER_LINE, ORDER_INFO, PRODUCT WHERE ORDER_LINE.ORDER_NO = ORDER_INFO.ORDER_NO";
 		try {
			con = MyConnection.getConnection();
			pstmt = con.prepareStatement(viewOrder);
			rs = pstmt.executeQuery();	//rs 변수에 주문내역을 할당
			List<OrderInfo> orderInfo = new ArrayList<>();
			while (rs.next()) {
				int orderNo = rs.getInt("order_no");
				String orderProdNo= rs.getString("order_prod_no");
				int orderQuantity =  rs.getInt("order_quantity");
				String orderIds = rs.getString("order_id");
				Date orderDT = rs.getDate("order_dt");
				String prodName = rs.getString("prod_name");
				Integer prodPrice = rs.getInt("prod_price");
				Product orderP = new Product(orderProdNo,prodName, prodPrice);		
				List<OrderLine> orderLine = (List)new OrderLine (orderNo, orderP, orderQuantity);			
			
				orderInfo = (List) new OrderInfo(orderNo, orderId, orderDT,orderLine);
			}
			return orderInfo;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
}
