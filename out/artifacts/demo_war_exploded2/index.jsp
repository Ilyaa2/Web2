<!DOCTYPE html>
<html lang="ru">

<head>
    <%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
<%--    НУЖЕН XML ФАЙЛ КОТОРЫЙ ПОЗВОЛЯЕТ ОБНАРУЖИТЬ ДИРЕКТОРИЮ RESOURCES И ФАЙЛЫ В НЕЙ--%>
<%--    <link rel="shortcut icon" href="" type="image/x-icon">--%>
<%--    <link rel="stylesheet" href="WEB-INF/css/reset.css">--%>
<%--    <link rel="stylesheet" href="WEB-INF/css/style.css">--%>
    <title>Graph</title>
</head>

<body>
<style>
    <%@include file="/WEB-INF/css/reset.css"%>
    <%@include file="/WEB-INF/css/style.css"%>
</style>
<div class="wrapper">
    <div class="container">
        <header>
            <div class="name">
                Загородников Илья
            </div>
            <div class="metainf">
                P32121<br>
                Вариант №1705
            </div>
        </header>
        <h1>Выберите значения, чтобы узнать попадает ли точка в область фигуры</h1>
<%--        <img src="resourses/graph.jpg" alt="graph" class="image">--%>
        <canvas id="canvas" width="500" height="500" style="border:1px solid #000000;display: block; margin: 0 auto;"></canvas>
        <form class="block_values" method="get" action="${pageContext.request.contextPath}/table" onsubmit="return validate()">
            <div class="values">
                <div class="elem">X:</div>
                <button type="button" value="-2" name="btn" onclick="enterX('-2')">-2</button>
                <button type="button" value="-1.5" name="btn" onclick="enterX('-1.5')">-1.5</button>
                <button type="button" value="-1" name="btn" onclick="enterX('-1')">-1</button>
                <button type="button" value="-0.5" name="btn" onclick="enterX('-0.5')">-0.5</button>
                <button type="button" value="0" name="btn" onclick="enterX('0')">0</button>
                <button type="button" value="0.5" name="btn" onclick="enterX('0.5')">0.5</button>
                <button type="button" value="1" name="btn" onclick="enterX('1')">1</button>
                <button type="button" value="1.5" name="btn" onclick="enterX('1.5')">1.5</button>
                <button type="button" value="2" name="btn" onclick="enterX('2')">2</button>
                <input name="btn" type="text" id="hidden_elem" style="display: none;">
<%--                --%>
<%--                style="display: block;margin-right: 5px;height:30px;width: 40px;font-size: 23px;text-align: center"--%>
            </div>
            <div class="values">
                <div class="elem">Y:</div>
                <input type="text" class="input_text" name="text" id="text" required >
<%--                onkeyup="enterY(this.value)"--%>
            </div>
<%--            <input name="txt" type="text" style="display: none;">--%>
            <div class="values">
                <div class="elem">R:</div>
                <div class="radio">
                    1<input type="radio" name="radiobutton" value="1">
                </div>
                <div class="radio">
                    1.5<input type="radio" name="radiobutton" value="1.5">
                </div>
                <div class="radio">
                    2<input type="radio" name="radiobutton" value="2">
                </div>
                <div class="radio">
                    2.5<input type="radio" name="radiobutton" value="2.5">
                </div>
                <div class="radio">
                    3<input type="radio" name="radiobutton" value="3">
                </div>
<%--                <input name="rbtn" type="text" style="display: none;">--%>
            </div>
            <button type="submit" class="submit" id="click">Отправить</button>
        </form>
    </div>
</div>

<script type="text/javascript">
    <%@include file="/WEB-INF/js/canvas.js"%>
</script>
<script type="text/javascript">
    <%@include file="/WEB-INF/js/script.js"%>
</script>
<script type="text/javascript">
    document.addEventListener("load",drawCanvas);
</script>
</body>

</html>
