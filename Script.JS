window.onload=function(){

    const rightBtn = document.getElementById("rightBtn");
    const leftBtn = document.getElementById("leftBtn");
    const display = document.getElementById("display")
    const backGround = document.getElementById("backgroundImg");


    const pics = ["Pic1.jpg","Pic2.png" , "Pic3.jpg" , "Pic4.png"]
    let index = 0;
    
    
    rightBtn.addEventListener("click" , ()=>{
        console.log("Right Button");
        index++;
        if (index == pics.length){
        index = 0;
        console.log(index);}
        display.src = pics[index];
        backGround.style.backgroundImage = `URL(`+pics[index]+`)`;
    })
    
    
    
    leftBtn.addEventListener("click" , ()=>{
        console.log("left Button")
        index--;
        if (index == -1){
            console.log(index);
            index = pics.length - 1;}
        display.src = pics[index];
        backGround.style.backgroundImage = `URL(`+pics[index]+`)` ;
    })
    

    



}

