

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-invis")
            entry.target.classList.add("fade-in")
        } else {
            entry.target.classList.add("scroll-invis")
            entry.target.classList.remove("fade-in")
        }
    })
})


const elementsToShowOnScroll = document.querySelectorAll(".scroll-invis")
elementsToShowOnScroll.forEach((el) => {
    observer.observe(el)
})