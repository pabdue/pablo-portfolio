package com.google.sps.servlets;

import java.io.IOException;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/funfacts")
public class FunFactsServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] funFacts = {
        "Every year, my family and I visit Rosarito, Mexico.",
        "My favorite movie-theater-snack is Trolli sour gummies.",
        "To de-stress, I enjoy listening to music and painting.",
        "I enjoy looking at other people's office setups.",
        "I am fluent in English and Spanish.",
        "My best pandemic-purchase was a Nintendo Switch.",
        "My favorite genres of music are: EDM, Reggaeton, & Indie.",
        "My first programming language was Java."};

    Gson gson = new Gson();
    String json = gson.toJson(funFacts);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
}
