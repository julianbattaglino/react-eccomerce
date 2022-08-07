import "./ItemDetail.css"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image } from '@chakra-ui/react'

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../components/context/CartContext'

import ItemCount from '../ItemCount/ItemCount.js'


const ItemDetail = ({ id, name, description, category, categoryDescription, price, img, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, category, price, quantity
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)




    return (
        <div className="main-detail">
            <Breadcrumb className='breadcrum'>
                <BreadcrumbItem>
                    <Link to='/'>Ir al inicio</Link>
                </BreadcrumbItem>
            </Breadcrumb>

            <div className='detail-container'>
                <div className='col-left'>
                    <Image className="detail-img" src={img} />
                </div>
                <div className='col-right'>
                    <div className='detail-name'>
                        <h2><span className="span-detail"></span>{name}</h2>
                    </div>
                    <div className='extract'>
                        <p><span className="span-detail"></span>{description}</p>
                    </div>
                    <div className='detail-description'>
                        <p><span className="span-detail"></span>{categoryDescription}</p>
                    </div>

                    <div className='detail-price'>
                        <p><span className="span-detail">Precio:</span> US${price}</p>
                    </div>
                    {
                        quantityToAdd === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity} />
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                    }
                </div>
            </div>
        </div>


    )
}


export default ItemDetail;

