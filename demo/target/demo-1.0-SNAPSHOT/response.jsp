<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="classes.ResponseRecord" %>
<%@ page import="java.util.ArrayList" %>
<html>
<head>
    <title>Table</title>
</head>
<body>
<style>
    <%@include file="/WEB-INF/css/styleResponse.css"%>
</style>

<table>
    <tr>
        <td>X</td>
        <td>Y</td>
        <td>R</td>
        <td>Result</td>
    </tr>
    <%
        try {
            String s = (String) application.getAttribute("counter");
            int count = Integer.parseInt(s);
            for (int i = 1; i < count + 1; ++i) {
                ResponseRecord record = (ResponseRecord) application.getAttribute(String.valueOf(i));
                ArrayList<Double> list = record.getList();
                if ("Not Included".equals(record.getVerdict())) {
    %>
    <tr class="red">
        <td><%=list.get(0)%>
        </td>
        <td><%=list.get(1)%>
        </td>
        <td><%=list.get(2)%>
        </td>
        <td><%=record.getVerdict()%>
        </td>
    </tr>
    <%
    } else {
    %>
    <tr class="green">
        <td><%=list.get(0)%>
        </td>
        <td><%=list.get(1)%>
        </td>
        <td><%=list.get(2)%>
        </td>
        <td><%=record.getVerdict()%>
        </td>
    </tr>
    <%
                }
            }
        } catch (Exception e) {

        }
    %>

</table>
<br>
<%--<a href="${pageContext.request.contextPath}" id="link">GO BACK</a>--%>
<button onclick='history.back()' id="link">GO BACK</button>>
</body>
</html>
