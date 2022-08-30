import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import "./Item.css";

const Item = ({ id, category, name, description, img, price }) => {

    return (
        <div className="item-container">
            <Box className="card-item" maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image className='img-product' src={img} alt={name} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge className='badge-category' px='2' colorScheme='teal'>{category}
                        </Badge>
                    </Box>

                    <Box className='card-title' mt='1' fontWeight='bold' as='h4' lineHeight='tight' noOfLines={1}>
                        {name}
                    </Box>

                    <Box className='card-description' fontWeight="semibold">{description}</Box>

                    {/* <Box className='card-price'>
                        Precio: US$ {price}
                        <Box as='span' color='gray.600' fontSize='sm'>

                        </Box>
                    </Box> */}
                    <Link to={`/detail/${id}`} className='show-more'>Ver detalle</Link>

                </Box>
            </Box>
        </div>
    )
}


export default Item;
