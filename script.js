let item = document.querySelectorAll('.item');
let step  = document.querySelectorAll('.step');
let numbers = document.querySelectorAll('.nummber');
let towMonthsFree = document.querySelectorAll('.towMonthFree');
let planPrice = document.querySelectorAll('.plan-price');
let nextStep1 = document.querySelector('.next-step');
let nextStep2 = document.querySelector('.next-step2');
let nextStep3 = document.querySelector('.next-step3');

let service1 = document.querySelector('#online-service');
let service2 = document.querySelector('#larger-storage');
let service3 = document.querySelector('#customizable-rofile');

let goBack1 = document.querySelector('.go-back1');
let goBack2 = document.querySelector('.go-back2');
let goBack3 = document.querySelector('.go-back3');

let checkbox = document.querySelector('input[type="checkbox"]');


document.addEventListener('DOMContentLoaded', function (){
        document.querySelector('.monthly').style.opacity = "1";
});



checkbox.addEventListener('change', function(){

    if(this.checked){
        document.querySelector('.child-span').style.right = "4%";
        document.querySelector('.yearly').style.opacity = "1";
        document.querySelector('.monthly').style.opacity = "0.6";
        towMonthsFree.forEach(item => {
            item.style.display = "block";
        });

        planPrice.forEach((item, index)=>{
            switch(index){
                case 0: item.innerHTML = "$90/yr" ; break;
                case 1: item.innerHTML = "$120/yr"; break;
                case 2: item.innerHTML = "$150/yr"; break;
            }
        });
    }
    else{
        document.querySelector('.child-span').style.right = "53%";
        document.querySelector('.yearly').style.opacity = "0.6";
        document.querySelector('.monthly').style.opacity = "1";
        towMonthsFree.forEach(item => {
            item.style.display = "none";
        });

        planPrice.forEach((item, index)=>{
            switch(index){
                case 0: item.innerHTML = "$9/mo" ; break;
                case 1: item.innerHTML = "$12/mo"; break;
                case 2: item.innerHTML = " $15/mo"; break;
            }
        });


    }
});

let wasActive = 1;

let step1 = document.querySelector('.step1');
let step2 = document.querySelector('.step2');
let right = document.querySelector('.right');

let inputs = document.querySelectorAll('.step1 input');
let errorMessage = document.querySelectorAll('.error-message');

inputs.forEach((item, index) => {
    item.addEventListener('focusout', function(){
            if(this.value.trim() == "")
                errorMessage[index].style.display = 'block';
    });
});

inputs.forEach((button, index, x) => {
    button.addEventListener('keypress', function(){
        errorMessage[index].style.display = 'none';
        console.log(x);
    });
});

function change(item, itemClicked, index){
    if(wasActive != index)
        {
            step[wasActive].classList.remove('active');
            numbers[wasActive].classList.remove('state-selected');
            wasActive = index;
        }
    item.classList.add('active');
    itemClicked.classList.add('state-selected');
}


item.forEach((item, index) => {
    item.addEventListener('click',  function(){
         change(step[index], numbers[index], index);
    });

});

nextStep1.addEventListener('click', function(){
    change(step[1], numbers[1], 1);
});

nextStep2.addEventListener('click', function(){
    change(step[2], numbers[2], 2);
});

nextStep3.addEventListener('click', function(){
    change(step[3], numbers[3], 3);
});

goBack1.addEventListener('click', function(){
    change(step[0], numbers[0], 0);
});

goBack2.addEventListener('click', function(){
    change(step[1], numbers[1], 1);
});

goBack3.addEventListener('click', function(){
    change(step[2], numbers[2], 2);
});