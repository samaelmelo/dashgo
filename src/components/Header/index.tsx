import {
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

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
      ['10px','50px','30%','20rem']
      significado:
        -> na posição 0 do brakpoint mobile o tamanho será => 10px
        -> na posição 1 do brakpoint tablet o tamanho será => 50px
        -> na posição 2 do brakpoint laptop o tamanho será => 30%
        -> na posição 3 do breakpoint laptop l o tamanho será => 20rem

*/

export const Header = () => {
  const { onOpen } = useSidebarDrawer()
  // por padrao/base quero que tal dado nao esteja visivel  e so quero q apareça quando estiver no tamanho lg
  // hook usado para habilitar e desabilitar dados de acordo com as quebras do breakpoints do chakra
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {isWideVersion ? (
        <></>
      ) : (
        // IconButton só renderiza ícone
        <IconButton
          icon={<RiMenuLine />}
          aria-label={'Open Navigation'}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
        ></IconButton>
      )}

      <Logo />
      {/* quando estiver na quebra do breakpoint entrar nessa validação */}
      {isWideVersion ? <SearchBox /> : <></>}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
