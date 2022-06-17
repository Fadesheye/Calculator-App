const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const cancelBtn = document.querySelector('.btn-cancel');



 for(let i=0; i< btns.length; i++){
     btns[i].addEventListener('click', 
     
     function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number
     })
 }

 equalBtn.addEventListener('click', function() {

    if(screen.value == ''){
        alert('input is empty')
    }
    else{
        let value = eval(screen.value)
        screen.value = value;
    }
 })

 cancelBtn.addEventListener('click', function(){
     screen.value= '';
 })