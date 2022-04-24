import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface CreateUserFormData {
  name: string
  email: string
  password: string
  password_confirmation: string
}
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


// yup é utilizado para criar validações de campos nos formularios
const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  // neste ponto estou querendo informar para a minha validação que quero que a password confirmation ou tenha o campo vazio que é igual a null ou password
  // o campo yup.ref() permite referenciar outro campo que já está sendo validado pelo proprio yup
  // ou seja, ele precisa ser igual ao campo que está sendo passado na validação do password em cima
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

/*
  DIVIDER - linha para dividir um conteudo
  VSTACK - componente para alinhar verticalmente algo
*/

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                label="Senha"
                type="password"
                error={errors.password}
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button as="a" colorScheme="whiteAlpha" cursor="pointer">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
