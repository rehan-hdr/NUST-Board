import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'


const styles = {
  global: {
    body: {
      color: '#000000',
      bg: '#ffffff'
    }
  }
}

const colors = {
  black:{
    neutral:'#000000'
  },

  theme:{
    neutral:'#ff4500'
  }
}

const theme = extendTheme({styles, colors});


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
