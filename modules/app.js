const imageLinks = [
    'https://bit.ly/3rm1G9G',
    'https://bit.ly/3qqoNAG',
    'https://bit.ly/3nsQXZX',
    'https://bit.ly/3trbjGQ',
    'https://bit.ly/33vTMT0',
    'https://bit.ly/34SGQY7',
    'https://bit.ly/3I8FzKz',
    'https://bit.ly/3twzFPs',
    'https://bit.ly/3FmBFw4',
    'https://bit.ly/3fmAIcH'
]

const description = 'Довольно-таки интересное описание товара в несколько строк.'

for (let index = 0; index < imageLinks.length; index++) {
    const num = replaceInputPrice(rand_10(1000, 100000))
    
    const item = {
        link: imageLinks[index],
        header: `Наименование товара #${rand(1, 9999)}`,
        description: `${description + description}`,
        price: `${num} руб.`,
    }

    const newProductItem = new ProductItem(item)
        newProductItem.appendProductItem(newProductItem)
}

actionProductItemAll(true)

function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

function rand_10(min, max){
    return Math.round(rand(min, max) / 10) * 10
}