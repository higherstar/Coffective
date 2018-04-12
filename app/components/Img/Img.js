import React from 'react'
import {Image, StyleSheet} from 'react-native'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import SvgImage from 'react-native-svg-uri'

const Img = props => {
  const source = resolveAssetSource(props.source)
  if (source && (source.uri && source.uri.match('.svg'))) {
    const otherProps = {}
    if (props.style) {
      const {width, height, ...style} = StyleSheet.flatten(props.style)
      if (width) {
        otherProps.width = width
      }
      if (height) {
        otherProps.height = height
      }
      otherProps.style = style
    }
    return <SvgImage {...props} {...otherProps} source={source}/>
  } else {
    return <Image {...props} />
  }
}

export default Img
