function validate() {
    let text = document.getElementsByClassName("input_text")[0].value;

    if (document.getElementById("hidden_elem").value === "") {
        alert("please, enter a value of X");
        return false;
    }

    let flag = false;
    let rad = document.getElementsByName('radiobutton');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            flag = true;
        }
    }

    if (!flag) {
        alert("please, enter a value of R");
        return false;
    }
    if ((text === "") || (isNaN(Number(text))) || (Number(text) > 5) || (Number(text) < -3) || (null === text.match(/^\-?[0-9]{1}(\.[0-9]{0,18})?$/))) {
        alert("Enter a rational number in the range [-3;5] up to 13 decimal places");
        return false;
    }
    return true;
}

function enterX(input) {
    document.getElementById('hidden_elem').setAttribute("value", input);
}


let mas_r = document.getElementsByName("radiobutton");
// если ничего не получается то используй checked

for (let i = 0; i < mas_r.length; i++) {
    mas_r[i].addEventListener("click", () => {
        let xhttp = new XMLHttpRequest();
        //console.log("You have pushed on the button",mas_r[i].value);
        drawCanvas();
        xhttp.onload = function () {
            if (this.responseText === "") return;
            str = this.responseText;
            twoDimArray = parseStringToArray(str.slice(0, str.length - 1));
            addDots(twoDimArray);
        }
        xhttp.open("GET", window.location.href + "table?radiobutton=" + mas_r[i].value+"&q=" + Math.random(), true);
        xhttp.send();
    });
}

function parseStringToArray(str) {
    let mas = str.split(";");
    let twoDimArray = new Array(mas.length / 3);
    for (let i = 0; i < mas.length / 3; i++) {
        twoDimArray[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            twoDimArray[i][j] = mas[3 * (i) + j];
        }
    }
    return twoDimArray;
}

function addDots(twoDimArray) {
    let multiplier;
    let tmpY;
    let x;
    let y;
    for (let i = 0; i < twoDimArray.length; i++) {
        //console.log(twoDimArray[i][2], "r");
        //console.log(twoDimArray[i][0], "x");
        // console.log(twoDimArray[i][1], "y");
        multiplier = 200 / 2 / (twoDimArray[i][2])
        //console.log(multiplier);
        tmpY = twoDimArray[i][1] * 200 / twoDimArray[i][2];

        x = 50 + (twoDimArray[i][0] * multiplier * 2 + 200);
        y = 250 - tmpY;

        let canvas = document.getElementById('canvas');
        let con = canvas.getContext('2d');
        con.fillStyle = '#008000';
        con.beginPath();
        con.arc(x, y, 4, 0, 2 * Math.PI);
        con.fill();
        con.stroke();
    }
}

let Xbtns = document.getElementsByName("btn");
for (let i = 0; i < Xbtns.length; i++) {
    Xbtns[i].addEventListener('focusin',()=>{
        Xbtns[i].style.color = "#ffffff";
        Xbtns[i].style.background = "#5D26C1";
    })
    Xbtns[i].addEventListener('focusout',()=>{
        Xbtns[i].style.color = "#000000";
        Xbtns[i].style.background = "#eeeeee";
    })
}

//не работает
// let rad = document.getElementsByName('radiobutton');
// for (let i = 0; i < rad.length; i++) {
//     if (rad[i].checked) {
//         console.log(rad[i].value);
//         rad[i].dispatchEvent(new Event("click"));
//         break;
//     }
// }

const submitBtn= document.getElementById('click');

submitBtn.addEventListener("click",()=> {
    if (validate()) {
        let xhttp = new XMLHttpRequest();
        let x = document.getElementById("hidden_elem").value;
        let y = document.getElementsByClassName("input_text")[0].value;
        let r;
        let rad = document.getElementsByName('radiobutton');
        for (let i = 0; i < rad.length; i++) {
            if (rad[i].checked) {
                r = rad[i].value;
            }
        }

        xhttp.open("GET",window.location.href+"/table?btn="+x+"&text="+y+"&radiobutton="+r,true);
        //xhttp.open("GET",window.location.href+"/table?btn=-0.5&text=2&radiobutton=1",true);
        xhttp.send();
        window.location.href = window.location.href + "table?";
    }
});

window.onload = function () {
    let rad = document.getElementsByName('radiobutton');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            console.log(rad[i].value);
            rad[i].dispatchEvent(new Event("click"));
            //break;
        }
    }
};