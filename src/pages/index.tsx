import {
  Flex,
  Button,
  Stack} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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

  Para obter os valores dos erros é preciso tipar o hook useForm() com a mesma tipagem que usada como parametro da tipagem SubmitHandler 

  Para fazer validações importamos a lib yup e yupResolver

  -segue o exemplo abaixo de como validar com yup

  dentro do meu hook useForm abro um objeto, nele há uma propriedade chamada resolver
  dentro dela eu passo a função yupResolver e dentro desta função passo a minha const construida sigInFormSchema para ser validada pelo yup

 */
// maneira de construir uma validação com yup
const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

interface SignInFormData {
  email: string
  password: string
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  // aqui eu informo que a minha função é do tipo SubmitHandler que vem do react-hook-form e recebe como parametro a minha interface identificando o que siginifica os values da minha função. Desta forma ela deixa de ser any.

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
            error={errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
