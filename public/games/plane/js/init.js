function calc() {
    var html = document.documentElement
    width = html.clientWidth
    if (width >= 768) {
        alert("")
    } else {
        html.style.fontSize = 20 * (width / 414) + "px"
    }

    // console.log(html.style.fontSize)
}

window.addEventListener("resize", calc)
calc()
//禁止左滑后退
document.addEventListener("touchmove", function (ev) {
    ev.preventDefault()
}, false);