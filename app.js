let inputKey = document.querySelector('#inputKey');
let inputvalue = document.querySelector('#inputvalue');
let Btn = document.querySelector('.menu button');

setInterval(updateTime,1000);

function updateTime(){
    let timenow = new Date();
    let timeConverted = timenow.toLocaleTimeString();
    document.querySelector('#time').innerHTML = timeConverted;
}

inputvalue.addEventListener('keyup',(e)=>{
    if(e.key == "Enter"){
        const key = inputKey.value;
        const value = inputvalue.value;
        console.log(key,value)
         if(key && value){
             localStorage.setItem(key,value);
         }
         for(let i = 0;i<localStorage.length;i++){
             const key = localStorage.key(i);
             const value = localStorage.getItem(key);

             document.querySelector('#text').innerHTML = key;
             document.querySelector('#task').innerHTML = value;
             inputKey.style.opacity = 0;
             inputvalue.style.opacity = 0;
         }
    }
});

let menuCover =  document.querySelector('.menu-cover');
let menuLinks = document.querySelector('.menu-links');
menuLinks.style.left = '-250px';
Btn.onclick =()=>{
   if(menuCover.style.display == 'none' && menuLinks.style.left == '-250px'){
     menuCover.style.display = 'block';
     menuLinks.style.left = '0px'
   }
   else{
    menuCover.style.display = 'none'
    menuLinks.style.left = '-250px'
   }
}
