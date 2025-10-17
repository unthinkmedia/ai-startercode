import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { Client as Styletron } from 'styletron-engine-atomic'
import App from './App.tsx'

const engine = new Styletron()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </StrictMode>,
)
