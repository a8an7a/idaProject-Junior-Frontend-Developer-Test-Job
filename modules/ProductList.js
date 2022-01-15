class ProductList {

    static CLASS_PRODUCT_LIST = 'product__list__wrap'
    static CLASS_ITEM = 'product__item'
    static CLASS_PRODUCT_DELETE = 'product__item__delete'
    static CLASS_COVER_IMAGE = 'product__cover__image'
    static CLASS_IMAGE = 'product__image'
    static CLASS_ITEM_BODY = 'product__item__body'
    static CLASS_HEADER = 'product__item__header'
    static CLASS_DESCRIPTION = 'product__item__description'
    static CLASS_PRICE = 'product__item__price'

    constructor(selector) {

        this.$element = document.querySelector(selector)
    }

    appendProductItem(options) {

        const fragment = document.createDocumentFragment()

        const item = this.createProductNode('div', ProductList.CLASS_ITEM),
            deleteProduct = this.createProductNode('div', ProductList.CLASS_PRODUCT_DELETE),
            coverImage = this.createProductNode('div', ProductList.CLASS_COVER_IMAGE),
            image = this.createProductNode('img', ProductList.CLASS_IMAGE, options.link),
            itemBody = this.createProductNode('div', ProductList.CLASS_ITEM_BODY),
            header = this.createProductNode('p', ProductList.CLASS_HEADER, options.header),
            description = this.createProductNode('p', ProductList.CLASS_DESCRIPTION, options.description),
            price = this.createProductNode('p', ProductList.CLASS_PRICE, options.price)

        coverImage.appendChild(image)
        itemBody.appendChild(header)
        itemBody.appendChild(description)
        itemBody.appendChild(price)
        item.appendChild(deleteProduct)
        item.appendChild(coverImage)
        item.appendChild(itemBody)

        fragment.appendChild(item)

        return this.$element.prepend(fragment)
    }

    createProductNode(elementType, className, params = '') {

        const element = document.createElement(elementType)
            element.classList.add(className)

        if (!params) {
            return element
        }

        if (elementType === 'img') {
            element.src = params
        }

        if (elementType === 'p') {
            element.innerText = params
        }

        return element
    }
}

class ProductItem extends ProductList {

    constructor(options) {

        super('.product__list__wrap')

        this.link = options.link
        this.header = options.header
        this.description = options.description
        this.price = options.price
    }
}