const rippleElement = document.querySelector(".ripple-target")
// rippleElement.style.setAttribute("--x", "0px")
// rippleElement.style.setAttribute("--y", "0px")

document.addEventListener("click", async (event) => {
    rippleElement.classList.add("ripple")
    var xposition = (event.clientX - rippleElement.offsetLeft - rippleElement.offsetWidth / 2);
    var yposition = (event.clientY - rippleElement.offsetTop - rippleElement.offsetHeight / 2);
    rippleElement.style.transform = "translate(" + xposition + "px," + yposition + "px)";
    await new Promise((resolve) => {
        setTimeout(()=>{
            resolve(1)
        }, 1000)
    })
    rippleElement.classList.remove("ripple")
})