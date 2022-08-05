// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import NotFound404 from './components/NotFound404/NotFound404';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Marcelo Kopp - Xilografias' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound404/>}  />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </ChakraProvider>
  );
}


export default App;
