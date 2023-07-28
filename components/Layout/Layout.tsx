import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <TempBody>
      <LayoutContainer>{children}</LayoutContainer>
    </TempBody>
  )
}

export default Layout

const TempBody = styled.div`
  background: #f2f2f2;
`

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  background: white;
`