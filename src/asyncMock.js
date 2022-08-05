const products = [
    //Serie Bestiario
    {
        id: '1',
        name: 'Bestiario 1',
        description: 'Xilografia - Serie bestiario',
        category: 'bestiario',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/bestiario.jpg',
        price: 10,
        stock: 10
    },
    //Serie Botanico Narcotico
    {
        id: '2',
        name: 'Botanico 1',
        description: 'Xilografia - serie botanico narcotico',
        category: 'botanico-narcotico',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/botanico.webp',
        price: 10,
        stock: 10
    },
    //Serie Ex-Libris
    {
        id: '3',
        name: 'Ex-Libris 1',
        description: 'Xilografia - Serie Ex Libris',
        category: 'ex-libris',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/ex-libris.webp',
        price: 10,
        stock: 10
    },
    //Serie Resignciones
    {
        id: '4',
        name: 'Resignacion 1',
        description: 'Xilografia - Serie Resignaciones',
        category: 'resignaciones',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/resignaciones/resignacion.jpg',
        price: 10,
        stock: 10
    },
    {
        id: '5',
        name: 'Resignacion 2',
        description: 'Xilografia - Serie Resignaciones',
        category: 'resignaciones',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/resignaciones/resignacion_02.jpg',
        price: 10,
        stock: 10
    },
    {
        id: '6',
        name: 'El Exterminio',
        description: 'Xilografía a contraveta 20 X 20 cm',
        category: 'resignaciones',
        categoryDescription: 'El artista grabador pasa del trabajo artesanal - como es el de cortar a cabeza y pulir “hasta el espejo” los tacos - , al artístico. Las estampas son producto del uso de buriles, como lo requiere la citada técnica, a través de los cuales sutilmente se perciben los trazos significativos de los tacos de madera de palo blanco, material que tradicionalmente se usa en la xilografía argentina. Zuliani, No tan medievales.',
        img: '/img/resignaciones/resignacion_03.jpg',
        price: 10,
        stock: 10
    },
    {
        id: '7',
        name: 'Resignacion 4',
        description: 'Xilografia - Serie Resignaciones',
        category: 'resignaciones',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/resignaciones/resignacion_04.jpg',
        price: 10,
        stock: 10
    },
    {
        id: '8',
        name: 'Resignacion 5',
        description: 'Xilografia - Serie Resignaciones',
        category: 'resignaciones',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/resignaciones/resignacion_05.jpg',
        price: 10,
        stock: 10
    },

    //Serie Cronicas del post-apocalipsis
    {
        id: '10',
        name: 'Cronicas 1',
        description: 'Xilografia - Serie Cronicas del post-apocalipsis',
        category: 'cronicas-del-post-apocalipsis',
        categoryDescription: 'La serie Resignaciones deriva de la resignificación de obras pasadas del grabado en clave de denuncia con las problemáticas ambientales de la región.',
        img: '/img/cronicas.webp',
        price: 10,
        stock: 10
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
        
    })
}

