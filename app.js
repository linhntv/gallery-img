var showImg = document.querySelectorAll('.warp__inner img')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery__img img')
var closeGallery = document.querySelector('.close')
var prev = document.querySelector('.gallery__left')
var next = document.querySelector('.gallery__right')


var newIndex = 0;
var show = () => {
    if (newIndex == showImg.length - 1) {
        next.classList.add('hiden')
    } else {
        next.classList.remove('hiden')
    }
    if (newIndex == 0) {
        prev.classList.add('hiden')
    } else {
        prev.classList.remove('hiden')
    }

    galleryImg.src = showImg[newIndex].src
    gallery.classList.remove('hiden')

}
showImg.forEach((item, index) => {
    item.addEventListener('click', function () {
        newIndex = index
        show()
    })
})

closeGallery.addEventListener('click', function () {
    gallery.classList.add('hiden')
})
prev.addEventListener('click', function () {
    if (newIndex > 0) {
        newIndex--
        show()
    }
})
next.addEventListener('click', function () {
    if (newIndex < showImg.length - 1) {
        newIndex++
        show()
    }

})



