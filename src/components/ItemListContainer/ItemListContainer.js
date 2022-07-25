import { Button, Heading } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock';

import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])


    return (
        <div className="item-list-container">
            <Heading className='site-title' as='h1'>{greeting}</Heading>
            <ItemList products={products}/>
        </div>
        

    );
}


export default ItemListContainer;
