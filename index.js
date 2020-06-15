const canvas=document.querySelector(".screen")
obj=document.querySelector(".js-obj"),
eyes=document.querySelector(".js-objEyes"),
objLeftLeg=document.querySelector(".js-left-leg"),
objRightLeg=document.querySelector(".js-right-leg"),
turnBtn=document.querySelector(".js-turnBtn"),
moveRightBtn=document.querySelector(".js-moveRightBtn");

function handleClick(event){
    event.preventDefault();
    eyes.classList.add("turn")
}

function handleMoveRight(event){
    event.preventDefault();
    objRightLeg.classList.add("walkRightLeg")
    objLeftLeg.classList.add("walkLeftLeg")
    for(i=0; i>100; i++){
      obj.classList.add("objMove")
    }
}

function init(){
    turnBtn.addEventListener("click", handleClick);
    moveRightBtn.addEventListener("click", handleMoveRight)
}
init();