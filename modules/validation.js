const form = document.querySelector('#product__form')
const buttonSubmit = document.querySelector('#product__body__submit')

const classSucess = '__sucess'
const classErrors = '__error'


form.addEventListener('input', (event) => {

    if (event.target.classList.contains('__required')) {
        validateRequire(event.target)
    }

    toggleButton(buttonSubmit, checkError(form))
})

function validateRequire(element) {
    if (!element.value) {

        if (element.classList.contains(classSucess)) {
            // Remove class .__sucess
            toggleInputStatus(element, false, classSucess)
        }
        // Set class .__error
        toggleInputStatus(element, true, classErrors)
    } else {

        if (element.classList.contains(classErrors)) {
            // Remove class .__error
            toggleInputStatus(element, false, classErrors)
        }
        // Set class .__sucess
        toggleInputStatus(element, true, classSucess)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!buttonSubmit.disabled) {

        const [
            productHeader,
            productDescription,
            productLink,
            productPrice
        ] = [...form.querySelectorAll('.input__filed')]

        const product = {
            link: productLink.value,
            header: productHeader.value,
            description: productDescription.value,
            price: productPrice.value,
        }

        const newProductItem = new ProductItem(product)
            newProductItem.appendProductItem(newProductItem)

        const newElem = document.querySelector('.item__hide') 
        delay(300).then(() => actionProductItem(newElem, true))

        event.target.reset()

        for (const input of document.querySelectorAll('.__required')) {
            toggleInputStatus(input, false, classSucess)
        }

        toggleButton(buttonSubmit, false)
    }
})

function checkError(form) {

    const inputs = form.querySelectorAll('.__required')

    for (const input of inputs) {
        if (!input.value) {
            return false
        }
    }

    return true
}

function toggleButton(button, status) {

    if (status) {
        button.classList.add('__sucess__btn')
        button.disabled = false
    } else {
        button.classList.remove('__sucess__btn')
        button.disabled = true
    }
}

function toggleInputStatus(input, status = false, className = '') {

    const messageBox = input.nextElementSibling

    if (status) {
        input.classList.add(className)
        messageBox.classList.add(className)
    } else {
        input.classList.remove(className)
        messageBox.classList.remove(className)
    }

    if (className === classErrors && status) {
        messageBox.innerText = 'Поле является обязательным'
    } else {
        messageBox.innerText = ''
    }
}