package classes;

import classes.ResponseRecord;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        double x = Double.parseDouble(req.getParameter("btn"));
        double y = Double.parseDouble(req.getParameter("text"));
        double r = Double.parseDouble(req.getParameter("radiobutton"));
        String verdict = response(x, y, r);

        ServletContext application = this.getServletContext();

        ArrayList<Double> list = new ArrayList<>();
        list.add(x);
        list.add(y);
        list.add(r);
        ResponseRecord record = new ResponseRecord(list, verdict);
        String counter = (String) application.getAttribute("counter");
        if (counter == null) {
            counter = "0";
        }
        counter = String.valueOf(Integer.parseInt(counter)+1);
        application.setAttribute("counter",counter);
        application.setAttribute(counter, record);
        //System.out.println(application.getAttribute("counter"));
        req.getServletContext().getRequestDispatcher("/response.jsp").forward(req, resp);
    }

    private String response(double x, double y, double r) {
        final String success = "Included";
        final String fail = "Not Included";
        //System.out.println("x: "+x);
        //System.out.println("y: "+y);
        //System.out.println("r: "+r);
        if (x >= 0 && y >= 0) {
            if (firstQuarter(x, y, r)) return success;
            return fail;
        } else if (x >= 0 && y <= 0) {
            if (fourthQuarter(x, y, r)) return success;
            return fail;
        } else if (x <= 0 && y >= 0) {
            if (secondQuarter(x, y, r)) return success;
            return fail;
        }
        return fail;
    }

    private boolean firstQuarter(double x, double y, double r) {
        return (y + 0.5 * x - 0.5 * r) <= 0;
    }

    private boolean secondQuarter(double x, double y, double r) {
        return (x * x + y * y <= r*r);
    }

    private boolean fourthQuarter(double x, double y, double r) {
        return (x <= r && y >= -0.5 * r);
    }
}
