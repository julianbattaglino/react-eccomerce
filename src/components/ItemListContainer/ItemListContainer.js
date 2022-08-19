import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/firebase';

//Chakra UI Components
import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        //Referencia a la colección de productos de Firebase para aplicar filtros con argumentos de query
        const collectionRef = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            //Almacenar en variable los datos de Firebase convertidos a un array de objetos
            const productsConverted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(productsConverted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


    }, [categoryId])


    if(loading) {
        return <h1 className="loading-text">Cargando productos...</h1>
    }

    return (
        <div className="item-list-container">

            <Breadcrumb className='breadcrum'>
                <BreadcrumbItem>
                    <Link to='/'>Ir al inicio</Link>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading className='site-title' as='h1'>{`${greeting} ${categoryId || ''}`}</Heading>
            <ItemList products={products} />
        </div>


    );
}

export default ItemListContainer;



