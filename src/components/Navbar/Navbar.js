import "./Navbar.css";
import { Menu, MenuButton, MenuList, MenuItem, Button, Image, Avatar } from '@chakra-ui/react'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar">
            <Link to='/'><Image className='logo-menu' src='/img/logo-mk.png' alt='Logo' /></Link>

            <div className='menu-container'>
                <Menu>
                    <MenuButton as={Button} >
                        Categorias
                    </MenuButton>
                    <MenuList>

                        <Link to='/' className="Option">
                            <MenuItem className='show-all' minH='40px'><span>Ver todas</span>
                            </MenuItem>
                        </Link>

                        <Link to='/category/bestiario' className="Option">
                            <MenuItem className='menu-item' minH='40px'>
                                <Avatar
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='/img/bestiario.jpg'
                                    alt='Xilografias Bestiario'
                                    mr='12px'
                                />
                                <span>Bestiario</span>
                            </MenuItem>
                        </Link>

                        <Link to='/category/botanico-narcotico' className="Option">
                            <MenuItem className='menu-item' minH='40px'>
                                <Avatar
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='/img/botanico.webp'
                                    alt='Xilografias Botanico Narcotico'
                                    mr='12px'
                                />
                                <span>Botanico narcotico</span>
                            </MenuItem>
                        </Link>

                        <Link to='/category/ex-libris' className="Option">
                            <MenuItem className='menu-item' minH='40px'>
                                <Avatar
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='/img/ex-libris.webp'
                                    alt='Xilografias Botanico Narcotico'
                                    mr='12px'
                                />
                                <span>Ex Libris</span>
                            </MenuItem>
                        </Link>

                        <Link to='/category/resignaciones' className="Option">
                            <MenuItem className='menu-item' minH='40px'>
                                <Avatar
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='/img/resignaciones.jpg'
                                    alt='Xilografias Botanico Narcotico'
                                    mr='12px'
                                />
                                <span>Serie Resignaciones</span>
                            </MenuItem>
                        </Link>

                        <Link to='/category/cronicas-del-post-apocalipsis' className="Option">
                            <MenuItem className='menu-item' minH='40px'>
                                <Avatar
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='/img/cronicas.webp'
                                    alt='Xilografias Botanico Narcotico'
                                    mr='12px'
                                />
                                <span>Cronicas del post apocalipsis</span>
                            </MenuItem>
                        </Link>

                    </MenuList>
                    <CartWidget />
                </Menu>
            </div>
        </nav>

    )
}

export default Navbar