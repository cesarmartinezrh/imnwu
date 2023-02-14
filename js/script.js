let header = document.getElementById('header')

let hearts = document.getElementById('hearts')
let clouds1= document.getElementById('clouds1')
let slogan = document.getElementById('slogan')
let slogan2 = document.getElementById('slogan2')
let clouds2 = document.getElementById('clouds2')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    hearts.style.left = value* -5  + 'px';
    clouds1.style.left = value* -1  + 'px';
    slogan.style.marginTop = value * 0.7 + 'px';
    slogan2.style.marginTop=   value * 0.7  + 'px';
    slogan.style.marginBottom =   value* -1  + 'px';
    slogan2.style.marginBottom =   value* -1  + 'px';
    clouds2.style.left = value* +1  + 'px';
    header.style.marginTop = value * 0.4 + 'px';

})