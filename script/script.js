let zar=document.getElementById('zar');
let nav=document.getElementById('nave');
let vo=document.getElementById('voo')

vo.addEventListener('click',function(e){
    e.preventDefault();
    vo.style.opacity= '0'
    nav.style.width= '100%'
    nav.style.transitionDuration= '500ms'
})

zar.addEventListener('click',function(e){
    e.preventDefault();
    nav.style.width= '0%'
    nav.style.transitionDuration= '500ms'
    vo.style.opacity= '1'
})
