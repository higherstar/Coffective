import { Dimensions, Platform, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

const base = {
  radius: 4,
  small: 22,
  medium: 36,
  large: 50,
  borderWidth: 1
}

const margins = {
  exSmallMargin: 5,
  smallMargin: 10,
  baseMargin: 20,
  doubleBaseMargin: 40,
  containerMarginX: 20
}

// Used via Metrics.baseMargin
const metrics = {
  tabBorderRadius: base.radius,
  // Buttons
  btnSizes: {
    sm: 36,
    md: 50,
    lg: 50,
  },
  btnHeight: base.medium,
  btnRadius: base.radius,
  btnBorderWidth: base.borderWidth,
  // Inputs
  inputSizes: {
    sm: 36,
    md: 50,
    lg: 50,
  },
  inputRadius: base.radius,
  inputBorderWidth: base.borderWidth,
  inputPadding: 20,
  multilineInputHeight: 100,
  // Loader
  loaderBgRadius: base.radius,
  // Progress bar
  progressBorderRadius: base.radius,
  progressHeight: 20,
  // Margins (also are used as paddings)
  ...margins,
  ratingStar: {
    width: 40,
    height: 40
  },
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : (56 + StatusBar.currentHeight),
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300
  },
}

export default metrics

