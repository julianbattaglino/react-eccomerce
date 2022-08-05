import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css";

import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])


    return (
        <div className="item-list-container">

            <Breadcrumb className='breadcrum'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Ir al inicio</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading className='site-title' as='h1'>{greeting}</Heading>
            <ItemList products={products} />
        </div>


    );
}


export default ItemListContainer;
