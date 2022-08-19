import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data()
            //Almacenar en variable los datos de Firebase convertidos a un array de objetos
            const productsConverted = { id: response.id, ...data }
            setProduct(productsConverted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])


    return (
        <div>
            {loading ? <h1 className="loading-text">Cargando...</h1> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer