import {
  Flex,
  Button,
  Stack,
  FormLabel,
  Input as InputChakra
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
/*
  STACK - usado quando você vai adicionar uma pilha de elementos e precisa de um espaço entre eles
  FORMCONTROL - usado para ficar por volta do FORMLABEL e o input e ela está atribuida
*/

import { Input } from '../components/Form/Input'

/*
  Para usar formulários de uma forma UNCONTROLLED precisamos passar um referência para o input.
  
  Por padrão, o react-hook-form cria essas referências de forma automática, então, basta passarmos
  a propriedade {...register([type do input])} do hook useForm dentro das propriedades do input .

  Preciso passar a função handleSubmit() do hook useForm() dentro do onSubmit do formulário. E para ter acesso
  aos values dos inputs preciso passar a minha função handleSignIn como parametro do meu handleSubmit que vem do hook useForm()
  
  É interessante tipar os values que vem dentro da função handleSubmit.
  Como estou recebendo os valores de um formulário que vem do react-hook-form então ele também nos dá a tipagem a ser usada 
  neste caso, que é o SubmitHandler
*/

interface SignInFormData {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  // aqui eu informo que a minha função é do tipo SubmitHandler que vem do react-hook-form e recebe como parametro a minha interface identificando o que siginifica os values da minha função. Desta forma ela deixa de ser any.

  // const handleSigin: SubmitHandler<SignInFormData> = async values => {
  //   await new Promise(resolve => setTimeout(resolve, 2000))
  //   console.log(values)
  // }

  console.log(formState.errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async value => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(value)
  }

  return (
    <Flex w="100vw" h={'100vh'} align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg={'gray.800'}
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            error={formState.errors}
            {...register('Email', { required: 'Email obrigatório' })}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={formState.errors}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
          // formState retorna diversas propriedades uma delas é se o está submetendo
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
