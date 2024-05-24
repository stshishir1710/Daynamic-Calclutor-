let display = document.querySelector(".display input");


// function for AC btn 
let oneBtn = document.querySelector("#one");
oneBtn.addEventListener("click",()=>{
    display.value += "1";
});
let twoBtn = document.querySelector("#two");
twoBtn.addEventListener("click",()=>{
    display.value += "2";
});
let threeBtn = document.querySelector("#three");
threeBtn.addEventListener("click",()=>{
    display.value += "3";
});
let fourBtn = document.querySelector("#four");
fourBtn.addEventListener("click",()=>{
    display.value += "4";
});
let fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener("click",()=>{
    display.value += "5";
});
let sixBtn = document.querySelector("#six");
sixBtn.addEventListener("click",()=>{
    display.value += "6";
});
let sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener("click",()=>{
    display.value += "7";
});
let eightBtn = document.querySelector("#eight");
eightBtn.addEventListener("click",()=>{
    display.value += "8";
});
let nineBtn = document.querySelector("#nine");
nineBtn.addEventListener("click",()=>{
    display.value += "9";
});
let zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener("click",()=>{
    display.value += "0";
})
// all operator 
let acBtn = document.querySelector("#ac");
acBtn.addEventListener("click",()=>{
    display.value = "";
});
let delBtn = document.querySelector("#del");
delBtn.addEventListener("click",()=>{
   display.value =  display.value.toString().slice(0,-1);
})
let parsentBtn = document.querySelector("#parsent");
parsentBtn.addEventListener("click",()=>{
    display.value += "%";
});
let divitionBtn = document.querySelector("#divition");
divitionBtn.addEventListener("click",()=>{
    display.value += "/";
});
let mainsBtn = document.querySelector("#mains");
mainsBtn.addEventListener("click",()=>{
    display.value += "-";
});
let intoBtn = document.querySelector("#into");
intoBtn.addEventListener("click",()=>{
    display.value += "*";
});
let plusBtn = document.querySelector("#plus");
plusBtn.addEventListener("click",()=>{
    display.value += "+";
});
let pointBtn = document.querySelector("#point");
pointBtn.addEventListener("click",()=>{
    display.value += ".";
});
let equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click",()=>{
    display.value = eval(display.value);
})