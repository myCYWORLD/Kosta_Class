package com.my.control;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.my.dto.Product;

public class AddOrderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json;charset=UTF-8");
		PrintWriter out = response.getWriter();
		ObjectMapper mapper = new ObjectMapper();
		String result = "";

		HttpSession session = request.getSession();
		Map<Product, Integer> cart = (Map)session.getAttribute("cart");
		if(cart == null || cart.size() == 0 ) { //장바구니 없거나 비어있는 경우
			Map<String, Object> map = new HashMap<>();
			map.put("status", -1);
			map.put("msg", "주문실패: 장바구니가 비었습니다");
			result = mapper.writeValueAsString(map);
		}else {
			//로그인된 사용자인가 확인
			String loginedId = (String)session.getAttribute("loginInfo");
			if(loginedId == null) { //로그인 안한 사용자인 경우
				Map<String, Object> map = new HashMap<>();
				map.put("status", 0);
				map.put("msg", "로그인하세요");
				result = mapper.writeValueAsString(map);

			}else {

			}
		}
	}
}
