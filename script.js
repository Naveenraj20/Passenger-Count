let count = document.getElementById("countDivId");
let largeInput = document.getElementById("boxDivId");
let resetControl = document.getElementById("resetDivId");
resetControl.addEventListener("click",()=>{
    resetControl.style.display="none";
    count.innerText = 0;
},true);
count.innerText = Number(0);
function addFun(){
    if(checkCountExcFun()){
        count.innerText = Number(count.innerText) + Number(largeInput.value);
        largeInput.value = "";
    }    
    largeInput.value = "";
    randomCheck();
};
function checkCountExcFun(){
    if(Number(count.innerText) + Number(largeInput.value) > Number(750) || Number(largeInput.value) > Number(750)){
        alert("Oops! Vehicle Reached It's Maximum Capacity :-(");
        return false;
    }
    return true;
};
function randomCheck(){
    if(count.innerText > 0){
        resetControl.style.display="block";
    }
    else{
        resetControl.style.display="none";
    }
};
function reduceFun(){
    if(checkCountBoundaryFun()){
        count.innerText = Number(count.innerText) - Number(largeInput.value);
        randomCheck();
        largeInput.value = "";
    }
    randomCheck();
    largeInput.value = "";
}
function checkCountBoundaryFun(){
    if((Number(count.innerText) - Number(largeInput.value)) < Number(0)){
        alert("Oops! There Are No Such Capacities Available :-(");
        return false;
    }
    return true;
}