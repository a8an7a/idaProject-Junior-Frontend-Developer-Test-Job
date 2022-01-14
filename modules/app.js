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
const someHeader = 'Наименование товара'
const someDescription = 'Довольно-таки интересное описание товара в несколько строк.'

// Заполняем наш список товаров, чтобы не было так пусто :)
for (let index = 0; index < imageLinks.length; index++) {
    const num = rand_10(1000, 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    const item = {
        link: imageLinks[index],
        header: `Наименование товара #${rand(1, 9999)}`,
        description: `${someDescription + someDescription}`,
        price: `${num} руб.`,
    }
    const newProductItem = new ProductItem(item)
    newProductItem.appendProductItem(newProductItem)
}

// Балуемся со случайными числами, чтобы наш список товаров не был таким скучным
function rand(min, max) {
    return Math.round(min + Math.random() * (max + 1 - min));
  }

function rand_10(min, max){
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}