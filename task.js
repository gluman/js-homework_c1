const revealdiv = document.querySelectorAll('div')

setInterval(() => {
    revealdiv.forEach(function (d) {
        if (d.classList.contains('reveal')) {
            const { top, bottom } = d.getBoundingClientRect()
            console.log(top, bottom, window.innerHeight)
            if (bottom < 0 || top > window.innerHeight) {
                d.classList.remove('reveal_active')
            }
            else {
                d.classList.add('reveal_active')
            }
        }
    })
}
    , 1000)