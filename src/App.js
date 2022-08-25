import './App.css';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Navbar from './components/Navbar/Navbar';
import NotFound404 from './components/NotFound404/NotFound404';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <ChakraProvider>
      <CartContextProvider>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Marcelo Kopp - Xilografias' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: ' /> } />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="*" element={<NotFound404/>}  />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}


export default App;
