import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

/*
  INPUTPROPS as CHAKRAINPUTPROPS : usado para extender todas as propriedades do input na interface e assim fazer com que o componente utilize todas essas props do input

  FORMCONTROL - usado para ficar por volta do FORMLABEL e o input e ela está atribuida


  Uma ref dentro do react não é tratada da mesma maneira que uma propriedade, diante disso, não posso atribuir o valor de uma ref dentro de uma interface ou tipagem. Para uma ref ser aceita como "propriedade" preciso transformar a minha função em uma const q recebe uma ARROW FUNCTION. No final da função exportá-lá dentro do metodo que vem do react chamada forwardRef().

  FowwardRef() -> faz o reecaminhamento de uma ref
  
  Passar a ref como segundo paramentro dentro da função , ou fora dos parâmetros atribuídos a interface tipada. A partir disso, pego esse parâmetro adiciono na propriedade ref do input. 

  Por padrão essa ref vem com a tipagem any, porém precisamos modificar essa tipagem com a que vem dentro do react
  ForwardRefRenderFunction
  


  A propriedade error que o meu input recebe a tipagem do react-hook-form chamada FieldError

  O componente do Chakra FormControl recebe uma propriedade chamada isValid para informar se esté campo está ou não inválido.

  O componente FormErrorMessage é usado para mostrar uma mensagem de erro 
  */

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {/* se existir erro o meu componente irá mostrar no momento da validação */}

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
