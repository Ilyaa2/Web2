
function drawCanvas() {
    let canvas = document.getElementById('canvas');


    let con = canvas.getContext('2d');

    con.fillStyle = '#3399ff';
    con.lineWidth = 2.0;


    con.moveTo(250, 15);
    con.lineTo(250, 485);

    con.stroke();

    con.moveTo(15, 250);
    con.lineTo(485, 250);
    con.stroke();

    con.beginPath();
    con.arc(250, 250, 200, Math.PI, -Math.PI / 2);
    con.lineTo(250, 250);
    con.lineTo(250 - 200, 250);
    con.fill();
    con.stroke();

    con.beginPath();
    con.moveTo(250, 250 - 100);
    con.lineTo(250 + 200, 250);
    con.lineTo(250, 250);
    con.lineTo(250, 250 - 100);
    con.fill();
    con.stroke();

    con.beginPath();
    con.fillRect(251, 251, 199, 99); // (x,y) - центр, потом (width,height)
    con.stroke();

    //север
    con.moveTo(240, 50);
    con.lineTo(260, 50);
    con.fillStyle = 'black';
    con.font = "30px Verdana";
    con.fillText("R", 260, 50)

    //восток
    con.moveTo(450, 240);
    con.lineTo(450, 260);
    con.fillText("R", 455, 250)

    //юг
    con.moveTo(240, 450);
    con.lineTo(260, 450);
    con.fillText("-R", 270, 460)

    //запад
    con.moveTo(50, 240);
    con.lineTo(50, 260);
    con.fillText("-R", 15, 250)

    con.stroke();
}


drawCanvas();


document.getElementById("canvas").addEventListener("click", function (e) {
    let r = validateR();
    if (r===false){
        return;
    }
    console.log(r,"r");
    let multiplier = 200 / 2 / (r);
    //console.log(multiplier, "multiplier")

    let x = e.offsetX - 250;
    let y = -e.offsetY + 250; //начало у offset = 0,0 - левый верхний угол
    //document.getElementById("x").innerHTML = x;
    //document.getElementById("y").innerHTML = y;
    x = Math.abs(x);

    let Realx = Math.trunc(x / multiplier) * 0.5;
    let Realy = y/200 *r;

    if ((x - Realx * multiplier) >= 25) {
        Realx += 0.5;
    }
    //console.log(Realx, "Конечное значение");

    if (Realx > 2) {
        Realx = 2
    }

    x = e.offsetX - 250;

    if (x < 0) {
        Realx = -Realx
    }

    let con = this.getContext('2d');

    con.fillStyle = '#008000';
    con.beginPath();
    //console.log(multiplier,"multiplier");
    //console.log(Realx*multiplier,"Xcoord");
    //console.log(Realy*multiplier,"Ycoord");

    //r на 50 пикселях
    console.log(multiplier);
    console.log(Realx*multiplier*2);
    //В КАКИХ ТО СЛУЧАЯХ НАДО ПРИБАВЛЯТЬ 50, А В КАКИХ ТО НЕТ
    //con.fillRect(45+(Realx*multiplier*2+200), e.offsetY, 10, 10); // (x,y) - центр, потом (width,height)
    con.arc(50+(Realx*multiplier*2+200), e.offsetY,4,0, 2 * Math.PI)
    con.fill();
    //Realx*multiplier - диапазон всех значений идет от -100 до 100
    con.stroke();
    document.getElementById("hidden_elem").value = Realx;
    document.getElementById("text").value = Realy;
})

function validateR(){
    let rad = document.getElementsByName('radiobutton');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            return rad[i].value;
        }
    }
    alert("please, enter a value of R");
    return false;
}