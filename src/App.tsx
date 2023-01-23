import { useState } from 'react'
import Header from './components/Header'
import Pricing from './components/Pricing'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Header />
      <Pricing/>
     </ChakraProvider>
  )
}

export default App
