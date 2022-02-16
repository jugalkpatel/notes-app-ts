import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  console.log(process.env.SECRET);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App