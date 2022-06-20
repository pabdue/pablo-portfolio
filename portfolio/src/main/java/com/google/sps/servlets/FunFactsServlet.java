package com.google.sps.servlets;

import java.util.ArrayList;
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
    ArrayList<String> funFacts = new ArrayList<String>();
    funFacts.add("Every year, my family and I visit Rosarito, Mexico.");
    funFacts.add("My favorite movie-theater-snack is Trolli sour gummies.");
    funFacts.add("To de-stress, I enjoy listening to music and painting.");
    funFacts.add("I enjoy looking at other people's office setups.");
    funFacts.add("I am fluent in English and Spanish.");
    funFacts.add("My best pandemic-purchase was a Nintendo Switch.");
    funFacts.add("My favorite genres of music are: EDM, Reggaeton, & Indie.");
    funFacts.add("My first programming language was Java.");

    String json = convertToJsonUsingGson(funFacts);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  // Function returns JSON by using Gson
  private String convertToJsonUsingGson(ArrayList<String> funFacts) {
    Gson gson = new Gson();
    String json = gson.toJson(funFacts);
    return json;
  }
}
