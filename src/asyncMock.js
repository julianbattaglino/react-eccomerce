const products = [
    {
        id: 1,
        name: 'Xilografia 1',
        description: 'Xilografia - Serie bestiario',
        category: 'bestiario',
        img: 'img/bestiario.jpg',
        price: 10,
        stock: 10,
    },
    {
        id: 2,
        name: 'Xilografia 2',
        description: 'Xilografia - serie botanico narcotico',
        category: 'botanico-narcotico',
        img: 'img/botanico.jpg',
        price: 10,
        stock: 10,
    },
    {
        id: 3,
        name: 'Xilografia 3',
        description: 'Xilografia - Serie Ex Libris',
        category: 'ex-libris',
        img: 'img/ex-libris.jpg',
        price: 10,
        stock: 10,
    },
    {
        id: 4,
        name: 'Xilografia 4',
        description: 'Xilografia - Serie Resignaciones',
        category: 'resignaciones',
        img: 'img/resignaciones.jpg',
        price: 10,
        stock: 10,
    },
    {
        id: 5,
        name: 'Xilografia 5',
        description: 'Xilografia - Serie Cronicas del post-apocalipsis',
        category: 'cronicas-del-post-apocalipsis',
        img: 'img/cronicas.jpg',
        price: 10,
        stock: 10,
    },

];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

