import "./ItemDetail.css"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image } from '@chakra-ui/react'


const ItemDetail = ({ name, description, category, categoryDescription, price, img }) => {

    console.log(categoryDescription)
    return (
        <div className="main-detail">
            <Breadcrumb className='breadcrum'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Ir al inicio</BreadcrumbLink>
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
                </div>
            </div>
        </div>

        
    )
}

export default ItemDetail