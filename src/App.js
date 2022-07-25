// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Counter from './components/Counter/Counter';

import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }



  return (
    <ChakraProvider>
      <Navbar />
      <Counter stock={10} onAdd={handleOnAdd} />
      <ItemListContainer greeting='Marcelo Kopp - Xilografias' />
    </ChakraProvider>
  );
}


export default App;
