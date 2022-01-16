const scopeButton = document.querySelector('#scope__btn')
const arrow = document.querySelector('.btn__arrow__down')
const scopeList  = document.querySelector('#scope__list')
const activeEvent = scopeButton.querySelector('.btn__text')
const preloader = document.querySelector('.preloader')

const classItemHide = 'item__hide'

scopeButton.addEventListener('click', () => {

    arrow.classList.contains('__scope__active') ? actionList() : actionList(true)
})

scopeList.addEventListener('click', (event) => {
    
    const scopeItem = event.target

    if (
        scopeItem.classList.contains('scope__list__item') &&
        !scopeItem.classList.contains('__active__item')
    ) {
        
        const actionItemList = scopeList.querySelector('.__active__item')

        if (actionItemList) {
            actionItemList.classList.remove('__active__item')
        }
        
        activeEvent.innerText = scopeItem.innerText
        scopeItem.classList.add('__active__item')

        preloaderAnimation(scopeItem.getAttribute('data-scope'))
    
        actionList()
    }
})

async function preloaderAnimation (scopeEvent) {

    preloader.classList.add('preloader__active')
    actionProductItemAll()

    await delay(1000).then(() => sortList(scopeEvent))
    await delay(500).then(() => preloader.classList.remove('preloader__active'))
    
    actionProductItemAll(true)
}



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
    } else if (method === 'max') {
        productsItems.sort((a, b) => getPrice(a) > getPrice(b) ? -1 : 1)
    } else if (method === 'abc') {
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