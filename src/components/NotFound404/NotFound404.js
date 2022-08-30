import "./NotFound404.css"
import { Image } from '@chakra-ui/react'

const NotFound404 = () => {

    return (
        <>
            <div className="not-found-container">
                <Image className="not-found-img" src="/img/extermination.png" />
            </div>
            <h2 className='not-found-title'>ERROR 404 - PAGE NOT FOUND</h2>

        </>
    )
}


export default NotFound404;