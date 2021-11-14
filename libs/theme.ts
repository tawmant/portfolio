import { mode } from '@chakra-ui/theme-tools'
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    variants: {
      link: (props: any) => ({
        color: mode('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3
      })
    },
    defaultProps: {
      variant: 'link'
    }
  }
}

const fonts = {
  heading: 'M PLUS Rounded 1c'
}

const colors = {
  grassTeal: '#88ccca'
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  components
})

export default theme
