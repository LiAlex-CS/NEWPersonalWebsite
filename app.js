
const headerImgState = Math.floor(Math.random()*2);

const backgroundImg = () =>{
    if(headerImgState === 1){
        document.querySelector('.jumbotron').style.background = "url('../imgs/toronto-3112508_1920.jpg') no-repeat center ";
    }
    else{
        document.querySelector('.jumbotron').style.background = "url('../imgs/city-863692.jpg') no-repeat";
    }
}

// const parallax = document.getElementsByClassName('parallax');
const parallax = document.getElementById('parallax');
let prevScrollPos = window.pageYOffset;



['scroll','resize'].forEach(evt => 
    window.addEventListener(evt, () => {
        let offset = window.pageYOffset;

        if(headerImgState === 1)
            // Array.from(parallax).forEach(evt => evt.style.backgroundPositionY = offset * 0.7 + -265 + "px");
            parallax.style.backgroundPositionY = offset * 0.7 + -265 + "px";
        else
            // Array.from(parallax).forEach(evt => evt.style.backgroundPositionY = offset * 0.7 + "px");
            parallax.style.backgroundPositionY = offset * 0.7 + "px";


        if(offset === 0 && window.innerWidth > 575){
            document.getElementById('navbar-background').style.background = "transparent";
            document.getElementById('navbar-background').style.borderBottom = "transparent";
        }
        else{
            document.getElementById('navbar-background').style.background = "black";
            document.getElementById('navbar-background').style.borderBottom = "solid white";
        }
    }
    )
)

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-background").style.top = "0";
  } else {
    document.getElementById("navbar-background").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;


  document.getElementById('footer').style.backgroundPositionY = currentScrollPos *0.7 - 1500 + "px";
}

// window.onscroll = () =>{
//     let offset = window.pageYOffset;

// }

// fixImgPos();
backgroundImg();