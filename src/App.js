import React from 'react'
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
  Box,
  Divider,
} from '@chakra-ui/core'
import GeneralForm from './components/GeneralForm'
import EducationalForm from './components/EducationalForm'
import PracticalExpForm from './components/PracticalExpForm'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <Box
          bg='gray.300'
          color='red.500'
          w='100%'
          h='35px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          fontSize={25}
          mb={5}
        >
          CV Project
        </Box>
        <GeneralForm />
        <Divider w='50%' m='auto' borderColor='red.300' pt={5} />
        <Box mb={5}></Box>
        <EducationalForm />
        <Divider w='50%' m='auto' borderColor='red.300' pt={5} />
        <Box mb={5}></Box>
        <PracticalExpForm />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
