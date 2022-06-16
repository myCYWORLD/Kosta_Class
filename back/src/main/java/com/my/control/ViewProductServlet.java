package com.my.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.my.dto.Product;
import com.my.exception.FindException;
import com.my.repository.ProductOracleRepository;
import com.my.repository.ProductRepository;

/**
 * Servlet implementation class ViewProductServlet
 */
public class ViewProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//1.요청 전달 데이터 얻기
		String prod_no = request.getParameter("prod_no");

		//2.DB에서 상품검색
		ProductRepository repository = new ProductOracleRepository();
		try {
			Product p = repository.selectByProdNo(prod_no);
			
			
			
			//3.request의 속성(이름:"p", 값:상품객체) 설정
			request.setAttribute("p",p);
			
			//4."/jsp/viewproduct.jsp이동
			String path = "/jsp/viewproduct.jsp";
			RequestDispatcher rd = request.getRequestDispatcher(path);
			rd.forward(request, response);
			//3.응답형식 지정
//			response.setContentType("text/html; charset=UTF-8");
//			PrintWriter out = response.getWriter();
//			out.print("<!DOCTYPE html>");
//			out.print("<html>");
//			out.print("상품번호:" + prod_no);
//			out.print("<h1>");
//			out.print("상품명:" + p.getProdName());
//			out.print("</h1>");
//			out.print("가격:" + p.getProdPrice());
//			out.print("</html>");
		} catch (FindException e) {
			e.printStackTrace();
		}
	}
}
