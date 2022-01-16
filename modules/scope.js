const scopeButton = document.querySelector('#scope__btn')
const arrow = document.querySelector('.btn__arrow__down')
const scopeList  = document.querySelector('#scope__list')
const activeEvent = scopeButton.querySelector('.btn__text')
const preloader = document.querySelector('.preloader')

scopeButton.addEventListener('click', () => {
    
    if (arrow.classList.contains('__scope__active')) {
        
        actionList()
    } else {
        
        actionList(true)
    }
})

scopeList.addEventListener('click', (event) => {

    if (
        event.target.classList.contains('scope__list__item') &&
        !event.target.classList.contains('__active__item')
    ) {
        
        const actionItemList = scopeList.querySelector('.__active__item')

        if (actionItemList) {
            actionItemList.classList.remove('__active__item')
        }

        const scopeItem = event.target
        const scopeEvent = scopeItem.getAttribute('data-scope')
        
        activeEvent.innerText = scopeItem.innerText
        scopeItem.classList.add('__active__item')
        
        preloader.classList.add('preloader__active')

        delay(1000).then(() => {

            sortList(scopeEvent)
            preloader.classList.remove('preloader__active')
            actionList()
        })
    }
})

function actionList (action = false) {
    
    if (action) {

        arrow.classList.add('__scope__active')
        scopeList.classList.add('__active')
    } else {

        arrow.classList.remove('__scope__active')
        scopeList.classList.remove('__active')
    }
}

function sortList (method) {

    const productsItems = [...document.querySelectorAll('.product__item')]
    
    if (method === 'min') {
        productsItems.sort((a, b) => getPrice(a) > getPrice(b) ? 1 : -1)
    }

    if (method === 'max') {
        productsItems.sort((a, b) => getPrice(a) > getPrice(b) ? -1 : 1)
    }

    if (method === 'abc') {
        productsItems.sort((a, b) => getName(a) > getName(b) ? 1 : -1)
    }

    updateProductList(productsItems)
}

function getPrice (element) {
    const currentElem = element.querySelector('.product__item__price')
    return parseInt(currentElem.innerText.replace(/\D/g, ''))
}

function getName (element) {
    const currentElem = element.querySelector('.product__item__header')
    return currentElem.innerText
}

function updateProductList (list) {
    
    const productList = document.querySelector('#product__list__wrap')

    for (const item of list) {
        productList.appendChild(item)
    }
}

function delay (wait = 3000) {
    const promise = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve()
        }, wait)
    })
    return promise
}