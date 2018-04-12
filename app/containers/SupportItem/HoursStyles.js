import {StyleSheet} from 'react-native'
import {Fonts, Metrics} from '../../themes'

export default StyleSheet.create({
  header: {
    margin: Metrics.smallMargin,
  },
  headerText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  card: {
    maxWidth: 150,
    marginRight: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
  },
  first: {
    marginLeft: Metrics.smallMargin,
  },
  cardTitle: {
    paddingVertical: Metrics.smallMargin,
  },
  cardTitleText: {
    textAlign: 'center',
  },
  cardBody: {
    padding: Metrics.smallMargin,
  },
  hoursText: {
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.small,
    textAlign: 'center',
  },
})
