import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: Metrics.smallMargin,
  },
  head: {
    height: Metrics.navBarHeight,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    marginBottom: Metrics.smallMargin,
  },
  cardTitleText: {
    fontSize: Fonts.size.h1,
    fontWeight: '300',
  },
  cardDescriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary
  },
  cardTitle: {
    marginBottom: Metrics.smallMargin,
  },
  cardDescription: {
    marginBottom: Metrics.baseMargin,
  },
  sectionHeader: {
    marginVertical: Metrics.smallMargin,
  },
  sectionHeaderText: {
    fontWeight: '300',
    fontSize: Fonts.size.h1,
  },
  role: {
  },
  roleText: {
    fontSize: Fonts.size.input,
    color: Colors.inputPlaceholder,
  },
  selectedRoleText: {
    color: Colors.inputText,
  },
})
