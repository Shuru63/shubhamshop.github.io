const navopen=document.getElementById('open');
const navclose=document.getElementById('close');
const nav=document.getElementsByClassName('navbar');
if(navopen){
    navopen.addEventListener('click',() => {
        nav.classList.toggle('active')
    })
    
}
if(navclose){
    navclose.addEventListener('click',() => {
        nav.classList.toggle('active')
    })
    
}
