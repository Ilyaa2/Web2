package classes;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.ArrayList;

public class FilterByRServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //0) проблема: когда я не нажал на кнопку (а вернулся обратно с сервера, то я не получу таблицу результатов по R)
        //3)допилить кнопку чтоб горела а не моргала. Сделал, но можно лучше, при нажатии на Y или R, цвет кнопки слетает. Нужно событие click, в массиве удалить нажатый элемент, а после итерироваться по этому массиву, вовзращая первоначальный стиль
        //6) старые значения у других R видны (если вводить около 0;0 и ниже). Нужно правильно удалять старый canvas
        PrintWriter writer = resp.getWriter();
        double r = Double.parseDouble(req.getParameter("radiobutton"));

        ServletContext application = this.getServletContext();

        String counter = (String) application.getAttribute("counter");
        if (counter == null) {
            return;
        }
        int count = Integer.parseInt(counter);

        StringBuffer rFilter= new StringBuffer("");
        //ошибка может быть на сервере, проверить контекст, просто полнностью его вывести
        for (int i = 1; i < count + 1; i++) {
            ResponseRecord record = (ResponseRecord) application.getAttribute(String.valueOf(i));
            ArrayList<Double> list = record.getList();
            if (list.get(2)==r){
                rFilter.append(convert(list));
                //twoDimList.add(list);
            }
        }
        writer.print(rFilter);
    }


    private String convert(ArrayList<Double> list){
        return list.get(0).toString()+";"+list.get(1).toString()+";"+list.get(2).toString()+";";
    }
}

