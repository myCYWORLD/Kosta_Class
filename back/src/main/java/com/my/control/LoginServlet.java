package com.my.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		
		response.setContentType("application/json;charset-UTF-8");
		PrintWriter out = response.getWriter();
		
		if("id1".equals(id) && "p1".equals(pwd)) {
			out.print("{\"status\": 1}");
		}else {
			out.print("{\"status\": 2}");
		}
	}
}
