class ProductList {
    static CLASS_PRODUCT_LIST            = 'product__list__wrap'
        static CLASS_PRODUCT_DELETE      = 'product__item__delete'
            static CLASS_DELETE_IMAGE    = 'delte__busket'
                static DELETE_IMAGE_SRC  = 'resource/delete.svg'
        static CLASS_ITEM                = 'product__item'
            static CLASS_COVER_IMAGE     = 'product__cover__image'
                static CLASS_IMAGE       = 'product__image'
            static CLASS_ITEM_BODY       = 'product__item__body'
                static CLASS_HEADER      = 'product__item__header'
                static CLASS_DESCRIPTION = 'product__item__description'
                static CLASS_PRICE       = 'product__item__price'

    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    // Функция создания нового продукта в нашем списке товаров
    appendProductItem (options) {
        const fragment = document.createDocumentFragment() 

        const item          = this.createItem()
        const deleteProduct = this.createDeleteProduct()
        const deleteImage   = this.createDelteImage()
        const coverImage    = this.createCoverImage()
        const image         = this.createImage(options.link)
        const itemBody      = this.createItemBody()
        const header        = this.createItemBodyElem(ProductList.CLASS_HEADER, options.header)
        const description   = this.createItemBodyElem(ProductList.CLASS_DESCRIPTION, options.description)
        const price         = this.createItemBodyElem(ProductList.CLASS_PRICE, options.price)

        deleteProduct.appendChild(deleteImage)
        coverImage.appendChild(image)
        itemBody.appendChild(header)
        itemBody.appendChild(description)
        itemBody.appendChild(price)
        item.appendChild(deleteProduct)
        item.appendChild(coverImage)
        item.appendChild(itemBody)

        fragment.appendChild(item)
        this.$element.prepend(fragment)
    }
    createItem () {
        const item = document.createElement('div')
            item.classList.add(ProductList.CLASS_ITEM)
        return item
    }
    createDeleteProduct () {
        const deleteProduct = document.createElement('div')
            deleteProduct.classList.add(ProductList.CLASS_PRODUCT_DELETE)
        return deleteProduct
    }
    createDelteImage () {
        const deleteImage = document.createElement('img')
            deleteImage.classList.add(ProductList.CLASS_DELETE_IMAGE)
            deleteImage.src = ProductList.DELETE_IMAGE_SRC
        return deleteImage
    }
    createCoverImage () {
        const coverImage = document.createElement('div')
            coverImage.classList.add(ProductList.CLASS_COVER_IMAGE)
        return coverImage
    }
    createImage (imageLink) {
        const coverImage = document.createElement('img')
            coverImage.classList.add(ProductList.CLASS_IMAGE)
            coverImage.src = imageLink
        return coverImage
    }
    createItemBody () {
        const itemBody = document.createElement('div')
            itemBody.classList.add(ProductList.CLASS_ITEM_BODY)
        return itemBody
    }
    createItemBodyElem (className, data) {
        const elem = document.createElement('p')
            elem.classList.add(className)
            elem.innerText = data
        return elem
    }
}

class ProductItem extends ProductList {
    constructor (options) {
        super('.product__list__wrap')
        this.link = options.link
        this.header = options.header
        this.description = options.description
        this.price = options.price
    }
}