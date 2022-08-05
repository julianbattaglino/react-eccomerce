import { Image } from '@chakra-ui/react'


const NotFound404 = () => {

    return (
        <div className="not-found-container">
            <Image className="not-found-img" src="/img/extermination.png" />
            <h1>404 NOT FOUND</h1>
        </div>
    )
}


export default NotFound404;