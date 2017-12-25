const type = {
  // TODO change font
  base: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 26,
  h2: 24,
  h3: 22,
  h4: 20,
  h5: 19,
  h6: 18,
  inputSmall: 15,
  inputMedium: 18,
  button: 16,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontWeight: '300',
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.base,
    fontWeight: '300',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontWeight: '300',
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style,
}
