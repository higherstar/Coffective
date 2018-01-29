// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

import Metrics from './Metrics'
import Colors from './Colors'

const AppStyles = {
  transparentHeader: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  inputIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
}

export default AppStyles
