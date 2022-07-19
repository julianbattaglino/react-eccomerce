import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import "./ItemListContainer.css";

const ItemListContainer = () => {

    const property = {
        imageUrl: 'img/bestiario.jpg',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }


    return (
        <div className="item-list-container">
            <Heading>Marcelo Kopp - Xilografias</Heading>

            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

      </Box>
    </Box>

        </div>
        
    );
}


export default ItemListContainer;
