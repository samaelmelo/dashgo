// @flow
import * as React from 'react'
import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'
import { useRouter } from 'next/router'

// ReactElement é diferente do REACTNODE porque ele precisa ser um COMPONENTE REACT e nao um atributo como o REACTNODE
/*
  se eu tenho um componente que pode RECEBER um outro COMPONENTE ou um TEXTO o tipo deste componente é REACTNODE

  se eu tenho um componente que SÓ PODE RECEBER um outro COMPONENTE dentro o tipo dele é REACTELEMENT
*/
interface ActiveLinkProp extends LinkProps {
  children: ReactElement
  shouldMatchExatHref?: boolean
}

export const ActiveLink: React.FC<ActiveLinkProp> = ({
  children,
  shouldMatchExatHref = false,
  ...rest
}) => {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExatHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    !shouldMatchExatHref &&
    (asPath.startsWith(String(rest.href)) || 
      asPath.startsWith(String(rest.as))) ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
