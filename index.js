let body = document.body;
const navbarNav  = document.querySelector('.navbar-nav')

function dark() {
    console.log('dark on');
    body.classList.toggle('dark');
}
document.querySelector('#menu').onclick = () =>{
    navbarNav.classList.toggle('active');
}
