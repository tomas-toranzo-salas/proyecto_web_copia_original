//HEADER INICIO (barrra de navegación)

bars = document.querySelector(".bars");
bars.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// HEADER FINAL



//DARK-MODE INICIO

document.getElementById('input').addEventListener('change', ()=>{
    if(document.body.className.indexOf('dark')===-1) {
        document.body.classList.add('dark');
    }
    else {
        document.body.classList.remove('dark');
    }
})

//DARK-MODE FINAL



/* REGRESAR INICIO*/

const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if(window.scrollY > 300) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



/* REGRESAR FINAL*/