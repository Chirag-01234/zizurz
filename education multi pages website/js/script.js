let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = function () {            //arrow function
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
