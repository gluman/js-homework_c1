const revealdiv = document.querySelectorAll('div')

setInterval(() => {
    revealdiv.forEach(function (d) {
        if (d.classList.contains('reveal')) {
            const { top, bottom } = d.getBoundingClientRect()
            console.log(top, bottom, window.innerHeitgh)
            // console.log()
            if (bottom < 0) {
                d.classList.remove('reveal_active')
            }
            else if (top > window.innerHeitgh) {
                d.classList.remove('reveal_active')
            }
            else {
                d.classList.add('reveal_active')
            }

        }
    })
}
    , 1000)