const btn = document.getElementById('click');

function validate() {
    let text = document.getElementsByClassName("input_text")[0].value;

    if (document.getElementById("hidden_elem").value == "") {
        alert("please, enter a value of X");
        return false;
    }

    // let myX = document.getElementById("hidden_elem").value;
    //
    // if (!(myX===-2 || myX===-1.5 || myX===-1 || myX===-0.5 || myX===0 || myX===0.5 || myX===1 || myX===1.5 || myX===2)){
    //     alert("Check the X value, it must be matched with values in the buttons");
    //     alert(myX);
    //     return false;
    // }

    let flag = false;
    let rad = document.getElementsByName('radiobutton');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            flag = true;
        }
    }

    if (!flag){
        alert("please, enter a value of R");
        return false;
    }
    if ((text == "") || (isNaN(Number(text))) || (Number(text) > 5) || (Number(text) < -3) || (null === text.match(/^\-?[0-9]{1}(\.[0-9]{0,18})?$/))) {
      alert("Enter a rational number in the range [-3;5] up to 13 decimal places");
      return false;
    }
    return true;
}

function enterX(input) {
    //document.getElementById('hidden_elem').removeAttribute("value");
    document.getElementById('hidden_elem').setAttribute("value", input);
}


