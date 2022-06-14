package com.my.sql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MyConnection {  
	static{  //ㄴstatic사용
		//2.JDBC드라이버 클래스로드
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	public static Connection getConnection() throws SQLException {
		//3.DB연결
		Connection con = null;
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String user = "hr";
		String password = "hr";
		
		con = DriverManager.getConnection(url, user, password);			
		return con;		//getConnection을 다른 곳에서도 계속 사용하기 위해 리턴값있는 메소드
	}
	public static void close(ResultSet rs, Statement stmt, Connection con) {
		//7.DB연결해제
		if(rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if(stmt != null) {
			try {
				stmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		if(con != null) {
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	public static void close(Statement stmt, Connection con) {
		close(null, stmt, con);
		
	}
}