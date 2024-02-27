const open=document.querySelector('.open');
const close=document.querySelector('.closed');
const sideNav=document.querySelector('.side-nav');

open.addEventListener('click',function(){
  sideNav.style.left="0";  
})
close.addEventListener('click',function(){
    sideNav.style.left="-100%";  
  })