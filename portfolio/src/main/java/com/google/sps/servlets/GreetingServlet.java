package com.google.sps.servlets;

import java.util.ArrayList;
import java.io.IOException;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/greeting")
public class GreetingServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // ArrayList holds facts about myself
    ArrayList<String> messages = new ArrayList<String>();
    messages.add("Every year, my family and I visit Rosarito, Mexico.");
    messages.add("My favorite movie-theater-snack is Trolli sour gummies.");
    messages.add("To de-stress, I enjoy listening to music and painting");
    messages.add("I enjoy looking at other people's office setups.");

    // Converts ArrayList into JSON
    String json = convertToJsonUsingGson(messages);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  // Function returns JSON by using Gson
  private String convertToJsonUsingGson(ArrayList<String> messages) {
    Gson gson = new Gson();
    String json = gson.toJson(messages);
    return json;
  }
}
