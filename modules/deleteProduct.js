const list = document.querySelector('#product__list__wrap')

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('product__item__delete')) {
        event.target.parentNode.remove()
    }
})