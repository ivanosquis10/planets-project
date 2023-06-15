import { ReactNode, useEffect } from 'react'
import { Header } from './Header'

interface Props {
  children?: ReactNode
  title: string
  navVisible?: boolean // if it true, the nav will be visible, | false, the nav will be hidden
}

export function Layout({ children, title = 'Home', navVisible }: Props) {
  // se encargada de actualizar el title
  useEffect(() => {
    const titleLayout = title.toUpperCase()
    document.title = `App Planets | ${titleLayout}`
  }, [title])
  return (
    <>
      <Header isVisible={navVisible} />
      {children}
    </>
  )
}
