var display=document.getElementById("display");


// main logic
function addToArea(params) {
    
}
var buttons =document.getElementsByClassName("num");
for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click" , function(e) {
        // console.log(e.target.textContent);
        if(display.value==="0"){
            display.value = e.target.textContent;
        }
        else{
            display.value+=e.target.textContent;
        }

        
    });
};

var clc=document.getElementById("cler");
clc.addEventListener("click" , function() {
    display.value="0";
    
});
var res=document.getElementById("ress");
res.addEventListener("click" , function() {
    display.value =eval(display.value);

    
});

var bk= document.getElementById("back");
bk.addEventListener("click" , function() {
    display.value = display.value.slice(0 , -1);
    

});

var rt= document.getElementById("root");
rt.addEventListener("click" , function () {
    display.value= Math.sqrt(display.value);
    
});



//adding animations on click 
function addAnimation(e) {
    let id= e.target.id;
    let temp=document.getElementById(id);
    temp.classList.add("bg-blur");
    setTimeout(() => {
        temp.classList.remove("bg-blur");
        
    }, 100);


    
}

var allButtons=document.getElementsByClassName("table-data");

for(let i=0;i<allButtons.length ;i++){
    allButtons[i].addEventListener("click" , addAnimation);
}



//Keystroke adding in progress