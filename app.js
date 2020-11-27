const headerImgState = Math.floor(Math.random()*2);
let initialListScrollHeight = document.getElementById('scroll-list-container')? document.getElementById('scroll-list-container').scrollHeight : null;
const constInitialListScrollHeight = initialListScrollHeight;
const numListItems = document.getElementById('scroll-list')? document.getElementById('scroll-list').getElementsByTagName("li").length: null;

//event listener functions

function parallax_function(){
    const parallax = document.getElementById('parallax');
    let offset = window.pageYOffset;
    if(headerImgState === 1)
        parallax.style.backgroundPositionY = offset * 0.7 + -265 + "px";
    else
        parallax.style.backgroundPositionY = offset * 0.7 + "px";
}

function navbar_function(){
    let offset = window.pageYOffset;
    if(offset === 0 && window.innerWidth > 575){
        document.getElementById('navbar-background').style.background = "transparent";
        document.getElementById('navbar-background').style.borderBottom = "transparent";
    }
    else{
        document.getElementById('navbar-background').style.background = "black";
        document.getElementById('navbar-background').style.borderBottom = "solid white";
    }
}

function duplicate_list(){
    const scrollList = document.getElementById('scroll-list');
    const listItemArray = scrollList.getElementsByTagName("li"); 
    const scrollListContainer = document.getElementById('scroll-list-container');
    const clonedListItemArray = [];
    for(let index = 0; index < numListItems; index++){
        clonedListItemArray.push(listItemArray[index].cloneNode(true));
    }

    if(scrollListContainer.scrollHeight - scrollListContainer.scrollTop === scrollListContainer.clientHeight){
        for(let index = 0; index < clonedListItemArray.length; index++){
            scrollList.appendChild(clonedListItemArray[index]);
        }
    }

    if(scrollListContainer.scrollTop >= initialListScrollHeight){
        for(let index = 0;  index < numListItems; index++){
            document.querySelector('.scroll-item').remove();
        }
    }
}


//--

//-index.html
if(document.URL.includes("index.html")){

    const backgroundImg = () =>{
        if(headerImgState === 1){
        document.querySelector('.jumbotron.index').style.background = "url('../imgs/toronto-3112508_1920.jpg') no-repeat center ";
        }
        else{
        document.querySelector('.jumbotron.index').style.background = "url('../imgs/city-863692.jpg') no-repeat";
        }
    }

    ['scroll','resize'].forEach(evt => {
        window.addEventListener(evt, parallax_function);
        window.addEventListener(evt, navbar_function);
        }
    )
    backgroundImg();
}
//-webdev.html
if(document.URL.includes("webdev.html")){

    ['scroll','resize'].forEach(evt => {
        window.addEventListener(evt, navbar_function);
        }
    );
    const scrollListContainer = document.getElementById('scroll-list-container');
    scrollListContainer.addEventListener('scroll', duplicate_list);
    
    let passiveScroll = setInterval(() => {
        const scrollListContainer = document.getElementById('scroll-list-container');
        scrollListContainer.scrollTop ++;
    }, 45);
    
    function mouseIn(){
        clearInterval(passiveScroll);
    }
    
    function mouseOut(){
        passiveScroll = setInterval(() => {
            const scrollListContainer = document.getElementById('scroll-list-container');
            scrollListContainer.scrollTop ++;
        }, 45);
    }
}

//aboutme.html
if(document.URL.includes("aboutMe.html")){
    var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 250, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

    // dynamically set the page height according to video length
    vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });


    // Use requestAnimationFrame for smooth playback
    function scrollPlay(){  
    var frameNumber  = window.pageYOffset/playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);

    ['scroll','resize'].forEach(evt => {
        window.addEventListener(evt, navbar_function);
        }
    );
    
}

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-background").style.top = "0";
  } else {
    document.getElementById("navbar-background").style.top = "-65px";
  }

  prevScrollpos = currentScrollPos;
  if(document.getElementById('footer') != null){
    document.getElementById('footer').style.backgroundPositionY = currentScrollPos *0.7 - 1500 + "px";
  }
}
