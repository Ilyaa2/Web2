package classes;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

public class ControllerServlet extends HttpServlet {

    //добавил последний else if
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext servletContext = getServletContext();

        if (validateAll(req)) {
            RequestDispatcher requestDispatcher1 = servletContext.getRequestDispatcher("/check");
            requestDispatcher1.forward(req, resp);
        } else if (validateR(req)) {
            RequestDispatcher requestDispatcher2 = servletContext.getRequestDispatcher("/r-filter");
            requestDispatcher2.forward(req, resp);
        } else if (req.getParameter("btn")==null && req.getParameter("text")==null && req.getParameter("radiobutton")==null) {
            RequestDispatcher requestDispatcher3 = servletContext.getRequestDispatcher("/response.jsp");
            requestDispatcher3.forward(req, resp);
        } else {
            RequestDispatcher requestDispatcher4 = servletContext.getRequestDispatcher("/WEB-INF/errors/400.html");
            requestDispatcher4.forward(req,resp);
        }

    }

    /*
    Допустимые значения
    1) все null
    2) все кроме R - null
    3) все не налл
     */
    private boolean validateAll(HttpServletRequest req) {
        String x = req.getParameter("btn");
        String y = req.getParameter("text");
        String r = req.getParameter("radiobutton");

        if (x == null || y == null || r == null) {
            //System.out.println(x == null);
            //System.out.println(y == null);
            //System.out.println(r == null);
            return false;
        }

        try {
            double xx = Double.parseDouble(x);
            double yy = Double.parseDouble(y);
            double rr = Double.parseDouble(r);
            double[] masForX = {-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2};
            double[] masForR = {1, 1.5, 2, 2.5, 3};
            boolean flag = false;
            if (Arrays.binarySearch(masForX, xx) < 0 || Arrays.binarySearch(masForR, rr) < 0) {
                //System.out.println("2");
                return false;
            }

            if (yy >= -3 || yy <= 5) {
                return true;
            }
        } catch (Exception e) {
            //System.out.println("3");
            return false;
        }
        return false;
    }

    private boolean validateR(HttpServletRequest req) {
        String r = req.getParameter("radiobutton");
        if (r == null) {
            return false;
        }
        try {
            double rr = Double.parseDouble(r);
            double[] masForR = {1, 1.5, 2, 2.5, 3};
            if (Arrays.binarySearch(masForR, rr) < 0) {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
        return true;
    }
}
