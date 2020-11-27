// fading in 

const sections = document.querySelectorAll('.fade-on-scroll, .neumorphism-2');

const options = {
    threshold:1,
    rootMargin: "0px 0px 20px 0px"
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(function(entry){
        if(!entry.isIntersecting){
            if(entry.target.classList.contains('appear'));
                // console.log(entry.target.getBoundingClientRect().top, window.scrollY);
                entry.target.classList.remove('appear');
            return;
        }
        else{
            entry.target.classList.add('appear');
            // appearOnScroll.unobserve(entry.target);
        }
    })
}, options);

sections.forEach(function(section){
    appearOnScroll.observe(section);
})

// fade in end 