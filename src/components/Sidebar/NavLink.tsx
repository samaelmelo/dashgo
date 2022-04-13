import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'

/*
  ElementeType é quando passo umm componente no formato de referencia, só na sua declaração, como um atributo de uma tag do react por exemplo:

    apenas o nome da sua variavel => RiGitMergeLine  | E NÃO A DECLARAÇÃO DO COMPONENTE <RiGitMergeLin/>

  Quero poder adicionar qualquer propriedade que um link pode receber, diante disso eu extendo para a minha interface o LinkProps do chakra que possibilita eu receber todas as propriedades no rest passado como paramentro

*/
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string
  href: string
}

export const NavLink: React.FC<NavLinkProps> = ({
  icon,
  children,
  href,
  ...rest
}) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}

// export const NavLink = memo(NavigationLink)
