package app.servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RedirectServlet extends HttpServlet {

  private final String redirectTo;

  public RedirectServlet(String redirectTo) {
    this.redirectTo = redirectTo;
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    System.out.println("SENDING REDIRECT TO /LOGIN page");
    resp.sendRedirect(redirectTo);
  }
}
