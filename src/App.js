// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting='Marcelo Kopp - Xilografias' />
    </ChakraProvider>
  );
}

export default App;
