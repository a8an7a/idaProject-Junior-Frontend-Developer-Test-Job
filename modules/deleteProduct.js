const list = document.querySelector('#product__list__wrap')

list.addEventListener('click', (event) => {

    if (event.target.classList.contains('product__item__delete')) {

        const currentItem = event.target.parentNode

        actionProductItem(currentItem, false)

        delay(300).then(() => currentItem.remove())
    }
})