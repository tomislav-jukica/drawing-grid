//Slider
const slider = $("input#slider");
const color = $("input#color");
let output = $("#vrijednostSlidera")[0];
output.innerHTML = slider[0].value;
let bojaIE = "#ffffff";

slider.change(function() { //na micanje slidera 
  output.innerHTML = this.value;
});

$("#btnGeneriraj").click(function() {
    generiraj();
});

function generiraj() {
    prazni();
    let velicina = slider[0].value;
    console.log("Velicina grida: " + velicina);    
    for(let i=0; i<velicina; i++){
        let row = $('<div></div>').addClass("row")
        $(".grid").append(row);

        for(let j=0; j<velicina; j++){
            let cell = $('<div></div>').addClass("cell");            
            row.append(cell);   
        }        
    }

    let cellWidth =  $(".cell").width();
    $(".cell").css("height", cellWidth + "px");


    function myFunction(x) {
        if (x.matches) { // If media query matches
            $(".cell").on('mouseover', function() {
                changeColor(this);
            });
        } else {
            $(".cell").on('click', function() {
                changeColor(this);
            });
        }
      }
      
      var x = window.matchMedia("(min-width: 600px)")
      myFunction(x) // Call listener function at run time

    
}

function prazni() {
    $(".grid").empty();
}


function changeColor(elem) {
    if(isIE11 = !!window.MSInputMethodContext && !!document.documentMode) { //IE11
        if(bojaIE !== "#ffffff") {   
            elem.style.backgroundColor = bojaIE;
        } else {
            let boja = getRandomColor();   
            elem.style.backgroundColor = boja;
        } 
    } else {
        let elemBackground = getStyle(elem, 'backgroundColor');
        if(elemBackground !== "rgb(255, 255, 255)" && elemBackground !== "#ffffff" ){
            elem.style.backgroundColor = "#ffffff";
        } else {
            if(color[0].value !== "#ffffff") {
                let boja = color[0].value;    
                elem.style.backgroundColor = boja;
            } else {
                let boja = getRandomColor();   
                elem.style.backgroundColor = boja;
            } 
        } 
    }
          
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getStyle(el,styleProp)
  {
      if (el.currentStyle)
          return el.currentStyle[styleProp];
  
      return document.defaultView.getComputedStyle(el,null)[styleProp]; 
  }


  $(".ie-color").on("change", function() {
      let red = Number($("#red")[0].value).toString(16);
      let green = Number($("#green")[0].value).toString(16)
      let blue = Number($("#blue")[0].value).toString(16)
      if(red.length < 2) {
        red = "0" + red;
      }
      if(green.length < 2) {
        green = "0" + green;
      }
      if(blue.length < 2) {
        blue = "0" + blue;
      }
      bojaIE = "#"+red+green+blue;

      let box = $(".trenutnaBoja");
      box.css("background-color", bojaIE);


  })
