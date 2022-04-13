import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import React from 'react'

//  AVATAR é uma tag do chakra que serve para colocar uma imagem e tambem adicionar um nome para pegar as iniciais

interface ProfileProps {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData ? (
        <Box mr="4" textAlign="right">
          <Text>Samael Melo</Text>
          <Text color="gray.300" fontSize="smal">
            samaelmelo.dev@gmail.com
          </Text>
        </Box>
      ) : (
        <></>
      )}

      <Avatar
        size="md"
        name="Samael Melo"
        src="https://github.com/samaelmelo.png"
      />
    </Flex>
  )
}
