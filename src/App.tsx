import { Block } from 'baseui/block'
import { HeadingXXLarge } from 'baseui/typography'

function App() {
  return (
    <Block
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="primary50"
    >
      <HeadingXXLarge marginBottom="scale800">
        'Let's Gooooo!'
      </HeadingXXLarge>
    </Block>
  )
}

export default App
