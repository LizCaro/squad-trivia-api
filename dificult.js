
function changeBackGround(x){
    
    var inputcolor = document.getElementById("total-questions"); 
    var inputcolor = document.getElementById("difficulty"); 
    if (x === "easy"){
        inputcolor.style.backgroundColor = "rgb(255, 255,0)";
    }
    else if (x === "medium"){
        inputcolor.style.backgroundColor = "rgb(255, 165,0)";
    }
    else {
        inputcolor.style.backgroundColor = "red";
    }
    
    

}

