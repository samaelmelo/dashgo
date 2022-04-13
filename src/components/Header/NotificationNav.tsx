import { HStack, Icon } from "@chakra-ui/react"
import React from "react"
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri"
/*
  Por padrão a STACK tem a sua direção na vertical/column.
  HSTACK tem a direção na horizontal/row

*/
/*
  responsividade no font size se escreve dentro de um array
  o primeiro item equivale ao tamanho mobile l = 425px, segundo item tamanho tablet vai ate = 768px, terceiro laptop = 1024px, quarto laptop l = 1440px

  Como funciona a responsividade no CHAKRA ?
    -> cada posição do array refere-se a um breakpoint
    posições: 
      0 - mobile l  - vai até 425px
      1 - tablet    - vai até 768px
      2 - laptop    - vai até 1024px
      3 - laptop l  - vai até 1440px
      ...etc

    Cada item que está no array utiliza-se de uma medida que eu desejar colocar
    exemplo:
      ["10px","50px","30%","20rem"]
      significado:
        -> na posição 0 do brakpoint mobile o tamanho será => 10px
        -> na posição 1 do brakpoint tablet o tamanho será => 50px
        -> na posição 2 do brakpoint laptop o tamanho será => 30%
        -> na posição 3 do breakpoint laptop l o tamanho será => 20rem

*/

export const NotificationNav = () => {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} />
      <Icon as={RiUserAddLine} />
    </HStack>
  )
}
