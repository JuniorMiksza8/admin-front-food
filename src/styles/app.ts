import { styled } from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`

const MainContent = styled.div<{ padding: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${props => props.padding || '0'};
`

const ContentArea = styled.main`
  flex: 1;
  overflow-y: auto;
`

export { AppContainer, MainContent, ContentArea }
