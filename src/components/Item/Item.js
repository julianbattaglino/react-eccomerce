import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import "./Item.css";

const Item = ({ product }) => {
    return (
        <div className="item-container">
            <Box className="card-item" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image className='img-product' src={product.img} alt={product.name} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge px='2' colorScheme='teal'>
                            Categoria: {product.category}
                        </Badge>
                    </Box>

                    <Box className='card-title' mt='1' fontWeight='bold' as='h4' lineHeight='tight' noOfLines={1}>
                        {product.name}
                    </Box>

                    <Box fontWeight="semibold">{product.description}</Box>

                    <Box>
                        Precio: U$D {product.price}
                        <Box as='span' color='gray.600' fontSize='sm'>

                        </Box>
                    </Box>

                </Box>
            </Box>
        </div>
    )
}


export default Item;
