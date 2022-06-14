package com.my.control;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ProductListServlet extends HttpServlet {
   private static final long serialVersionUID = 1L;

   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      response.setContentType("application/json;charset=utf-8"); //charset은 대소문자 구분X
      PrintWriter out = response.getWriter();
      
      //DB쪽 자료
      List<Map<String,Object>> sample = new ArrayList<>();
      Map<String,Object> map1 = new HashMap<>();
      map1.put("prod_no","C0001");
      map1.put("prod_name","아메리카노");
      map1.put("prod_price","1000");
      sample.add(map1);

      Map<String,Object> map2 = new HashMap<>();
      map2.put("prod_no","C0002");
      map2.put("prod_name","아메리카노");
      map2.put("prod_price","1000");
      sample.add(map2);
      
      Map<String,Object> map3 = new HashMap<>();
      map3.put("prod_no","C0003");
      map3.put("prod_name","아메리카노");
      map3.put("prod_price","1500");
      sample.add(map3);
      // ------------------------
      
      
      String result ="["; //자바스크립트의 []
      for(int i = 0; i<sample.size(); i++) {
         if(i>0) {
            result += ",";
         }
         Map<String,Object> map4 = sample.get(i);
         map4.get("prod_no");
         map4.get("prod_name");
         map4.get("prod_price");

         result += "{"; //자바스크립트 객체{}
         result += "\"prod_no\":"; result += "\""+ map4.get("prod_no")+"\""; result += ",";
         result += "\"prod_name\":"; result += "\""+ map4.get("prod_name")+"\""; result += ",";
         result += "\"prod_price\":"; result += map4.get("prod_price"); // "2000" 대신
         result += "}";
      }
//      result += "{";
//      result += "\"prod_no\":"; result += "\"C0002\""; result += ",";
//      result += "\"prod_name\":"; result += "\"아메리카노\""; result += ",";
//      result += "\"prod_price\":"; result += "1000";  // 숫자타입은 "\\"넣어주지 않아도 됨
//      result += "}";
//      result += ",";
//      
//      result += "{";
//      result += "\"prod_no\":"; result += "\"C00023\""; result += ",";
//      result += "\"prod_name\":"; result += "\"바닐라플랫화이트\""; result += ",";
//      result += "\"prod_price\":"; result += "1500";  // 숫자타입은 "\\"넣어주지 않아도 됨
//      result += "}";
      
      result += "]";
      
      out.print(result);
   }

}