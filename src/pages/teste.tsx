import React from 'react'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/InputBase'
import { useForm, SubmitHandler } from 'react-hook-form'

interface DataFormProps {
  name: string
  password: string
}

const Teste = () => {
  const { register, handleSubmit, formState } = useForm()

  const handlerSignIn: SubmitHandler<DataFormProps> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        flexDirection="column"
        as="form"
        w="100%"
        maxW="400px"
        border="1px solid gray"
        borderRadius="8px"
        p="2rem"
        bg={'gray.700'}
        onSubmit={handleSubmit(handlerSignIn)}
      >
        <Stack spacing="2rem">
          <Stack spacing="0.5rem">
            <Input
              type="text"
              name="name"
              id="name"
              label="Usuário"
              {...register('name')}
            />
            <Input
              type="password"
              name="password"
              id="password"
              label="Senha"
              {...register('password')}
            />
          </Stack>

          <Button
            variant="solid"
            colorScheme="green"
            size="lg"
            type="submit"
            isLoading={formState.isSubmitting}
          >
            Login
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Teste
