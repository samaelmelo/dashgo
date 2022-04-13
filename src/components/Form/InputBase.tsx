import {
  Input as InputChakra,
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  Stack
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
  label?: string
  name: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputChakra
        name={name}
        id={name}
        {...rest}
        focusBorderColor="blue.100"
        size="lg"
        variant="filled"
        ref={ref}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
