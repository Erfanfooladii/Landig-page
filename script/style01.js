let col=document.getElementById('col');
let btn=document.getElementById('btn01');
let zarb=document.getElementById('zarb');
let btnn=document.getElementById('btn02')

btn.addEventListener('click',function(e){
    e.preventDefault();
    col.style.display= 'flex';
    zarb.addEventListener('click',function(e){
        e.preventDefault();
        col.style.display= 'none'
    })
})

btnn.addEventListener('click',function(e){
    e.preventDefault();
    col.style.display= 'flex';
    zarb.addEventListener('click',function(e){
        e.preventDefault();
        col.style.display= 'none'
    })
})