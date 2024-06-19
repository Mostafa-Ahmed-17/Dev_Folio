





var btttn = document.getElementById("btttn");


window.onscroll= function()
{
if (window.scrollY >= 350){

    btttn.style.display = "block"
}
else{
    btttn.style.display = "none"
}
}



let active = document.querySelectorAll(`.collapse ul li a`)

active.forEach( function (elm) {

    elm.addEventListener(`click` , function() {
        active.forEach(function (elm) {
            elm.classList.remove(`active`)
        })
        elm.classList.add(`active`)
    })
} )




