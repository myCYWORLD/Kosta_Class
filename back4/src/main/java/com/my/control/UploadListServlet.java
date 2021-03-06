package com.my.control;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class UploadListServlet
 */
@WebServlet("/uploadlist")
public class UploadListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String opt = request.getParameter("opt");
		String []fileNames = null;
		if(opt == null) {
			fileNames = new String[]{"x.jpg", "F0001.jpg", "C0001.jpg","C0002.jpg", "R0001파일.txt"};
		}
		ObjectMapper mapper = new ObjectMapper();
		String saveDirectoryName = "c:\\files";
   		List<Map<String,Object>> list = new ArrayList<>();
   		for(String fileName : fileNames) {
   			Path path = Paths.get(saveDirectoryName, fileName);
			String contentType = Files.probeContentType(path);

			if(path.toFile().exists()) {
				Map<String,Object> map = new HashMap<>();
				map.put("name", fileName);
				map.put("contentType", contentType);
				list.add( map );
			}
   		}
   		response.setContentType("application/json;charset=utf-8");
   		PrintWriter out = response.getWriter();
   		out.print(mapper.writeValueAsString(list));
	}

}
