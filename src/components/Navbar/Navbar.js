import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import CartWidget from '../CartWidget/CartWidget';


import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {

    return (
        <nav className="navbar">
            <Image className='logo-menu' src='img/logo-mk.png' alt='Logo' />
            <div className='menu-container'>
            <Menu>
                <MenuButton as={Button} /*rightIcon={<ChevronDownIcon />}*/>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='img/bestiario.jpg'
                            alt='Xilografias Bestiario'
                            mr='12px'
                        />
                        <span>Bestiario</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='img/botanico.jpg'
                            alt='Xilografias Botanico Narcotico'
                            mr='12px'
                        />
                        <span>Botanico narcotico</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='img/ex-libris.jpg'
                            alt='Xilografias Botanico Narcotico'
                            mr='12px'
                        />
                        <span>Ex Libris</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='img/resignaciones.jpg'
                            alt='Xilografias Botanico Narcotico'
                            mr='12px'
                        />
                        <span>Serie Resignaciones</span>
                    </MenuItem>
                    <MenuItem minH='40px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src='img/cronicas.jpg'
                            alt='Xilografias Botanico Narcotico'
                            mr='12px'
                        />
                        <span>Cronicas del Post Apocalipsis</span>
                    </MenuItem>
                </MenuList>
                <CartWidget />
            </Menu>
            </div>
        </nav>

    )
}

export default Navbar