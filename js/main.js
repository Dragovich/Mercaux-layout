const backSlide = () => {
    const elements = document.getElementsByClassName('task4_field')
    for (let i=0, length = elements.length; i < length; i++) {
        if (elements[i].classList.contains('active')) {
            elements[i].classList.remove('active')
            i--
            if (i<0) {
                i = elements.length - 1
            }
            elements[i].classList.add('active')
            return true
        }
    }
}

const nextSlide = () => {
    const elements = document.getElementsByClassName('task4_field')
    for (let i=0, length = elements.length; i < length; i++) {
        if (elements[i].classList.contains('active')) {
            elements[i].classList.remove('active')
            i++
            if (i ===elements.length) {
                i = 0
            }
            elements[i].classList.add('active')
            return true
        }
    }
}

setInterval(nextSlide, 2000)
