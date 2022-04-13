// importar o tema padrao do chakra
import { extendTheme } from '@chakra-ui/react'

// subistituir algumas coisas do tema do chakra

export const theme = extendTheme({
  // estilar as cores da minha aplicação
  colors: {
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2",
    }
  },
  /*
  estilizar as fonts: 
   -body = todos os textos da aplicação
   -heading = do cabeçarios h1,h2,h3,h4 ...
   -mono = fonts de código 
  */ 
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    // o estilo global do meu body será assim
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})
