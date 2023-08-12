const navbar = document.querySelector(".navbar");
const date = document.getElementById("date");
const menubar = document.querySelector(".menubar")
const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");

let navhtbefore_navmenu;

date.textContent = new Date().getFullYear();

//  ------- depending on the resizing of window change navbar and its class to change behaviour  -------  //

resizeNavbar()

window.addEventListener("resize", function(){
    resizeNavbar();
})

//  --------------  fixing navbar according to user scrolling  ---------------  //
window.addEventListener("scroll",function(){
    if(window.pageYOffset > navbar.getBoundingClientRect().height){
        navbar.classList.add("fixed");
        document.querySelector(".homepage").style.marginTop = `${navbar.getBoundingClientRect().height}px`;
    } else {
        navbar.classList.remove("fixed");
        document.querySelector(".homepage").style.marginTop = 0;
    }
    
})

// ----------- Hamburger menu  -------------  //

menubar.addEventListener("click",function(){
    if(navMenu.getBoundingClientRect().height == 0){
        navMenu.style.height = `${navList.getBoundingClientRect().height}px` ;
    } else {
        navMenu.style.height = 0;
    }
})


//  --- scrolling to position where clicked and considering fixed navbars height  ---   //

// const navhtbefore_navmenu = navbar.getBoundingClientRect().height;

document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click",function(e){
        e.preventDefault();

        const id = item.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        const navheight = navbar.getBoundingClientRect().height;
        const navMenuheight = navMenu.getBoundingClientRect().height;
        let position = element.offsetTop;

        if (navheight > navhtbefore_navmenu){
            position = position - (navheight - navMenuheight);
        } else if(navheight == navhtbefore_navmenu){
            position = position - (navheight - navMenuheight);
        } else {
            position = position - navhtbefore_navmenu;
        }

        scrollTo({
            left:0,
            top: position 
        })

        navMenu.style.height = 0;
        item.removeEventListener("click",function(){});
    })
})



function resizeNavbar(){
    if (window.innerWidth <= 770){
        navMenu.classList.remove("bignavbar");
        navhtbefore_navmenu = navbar.getBoundingClientRect().height;
    } else if(window.innerWidth > 770 ) {
        navMenu.style.height = 0;
        navMenu.classList.add("bignavbar");
        navhtbefore_navmenu = navbar.getBoundingClientRect().height;
    }
}


// // ----- gsap code ----- //
// let tl = gsap.timeline();

// tl.from(".homepage h1, .homepage h2 , .homepage p, .homepage button, .homepage h4",{
//     x: -50,
//     duration: 1
// })

// tl.from(".gallery .container", {
//     opacity: 0,
//     scale:0.8,
//     duration: 0.5
// })