package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String name = request.getParameter("name-input");
    String email = request.getParameter("email-input");
    String message = request.getParameter("message-input");

    // Print the value so you can see it in the server logs.
    System.out.println("Name: " + name);
    System.out.println("Email: " + email);
    System.out.println("Message: " + message);

    // Write the value to the response so the user can see it.
    response.getWriter().println("Name: " + name);
    response.getWriter().println("Email: " + email);
    response.getWriter().println("Message: " + message);
    
    response.sendRedirect("https://pduenas-sps-summer22.appspot.com/contact.html");
  }
}