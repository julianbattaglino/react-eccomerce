// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
