// Отслеживаем добовление нового товара с помощью объекта MutationObserver 
// и присваиваем ему обработчик события Удаления элемента
const target = document.querySelector('.product__list__wrap')
const config = { childList: true }

const observer = new MutationObserver(callback)
observer.observe(target, config)

function callback (mutationsList, observer) {
    for (const mutation  of mutationsList) {
        if (mutation.addedNodes.length > 0) {
            const newElem = mutation.addedNodes[0].querySelector('.product__item__delete')
            newElem.addEventListener('click', deleteProduct)
        }
    }
}

function deleteProduct (event) {
    if (this.parentElement.className === 'product__item') {
        this.parentElement.remove()
    }
}