import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps {
  title: string
  children: ReactNode
}
// BOX é uma div vazia sem modificação
// A TIPAGEM REACTNODE vai aceitar tudo que posso colocar dentro de uma tag do react

export const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
