import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect
} from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { create } from 'domain'

// o hook useDisclosure usado para controlar MODAL, ALERTDIALOG, DRAWER
// ele retorna funções e atributos
/*
  isOpen = boolean
  onClose = function
  onOpen = function
  onToggle = function
*/

// interface SidebarDrawerProviderProps {
//   children: ReactNode
// }

/*
  o hook useDisclosure() tem o retorno da função a tipagem UseDisclosureReturn.
  Desta forma, informo que o meu objeto dentro do meu createContext é como UseDisclosureReturn
*/
// export const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

// export const SidebarDrawerProvider = ({
//   children
// }: SidebarDrawerProviderProps) => {
//   const disclosure = useDisclosure()

//   const router = useRouter()

//   // sempre que mudar o meu router.asPath a minha função onClose() será disparada, ou seja, a minha sidebar será fechada.
//   // router.asPath é o caminho atual da minha url
//   useEffect(() => {
//     disclosure.onClose()
//   }, [router.asPath])

//   return (
//     <SidebarDrawerContext.Provider value={disclosure}>
//       {children}
//     </SidebarDrawerContext.Provider>
//   )
// }

// export const useSidebarDrawer = () => useContext(SidebarDrawerContext)

interface SidebarDrawerProviderProps {
  children: ChildNode
}

type SidebarDrawerType = UseDisclosureReturn

export const SidebarDrawerContext = createContext({} as SidebarDrawerType)

export const SidebarDrawerProvider: React.FC<SidebarDrawerProviderProps> = ({
  children
}) => {
  const disclosure = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
