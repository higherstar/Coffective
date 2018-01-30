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
  cardDescriptionText: {
    color: Colors.grey,
    fontFamily: Fonts.type.secondary
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
  roleText: {
    fontSize: Fonts.size.input,
    color: Colors.inputPlaceholder,
  },
  selectedRoleText: {
    color: Colors.inputText,
  },
  championInvitedCard: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.baseMargin,
    ...Metrics.boxShadow,
    backgroundColor: Colors.white,
    borderRadius: 7,
    marginBottom: Metrics.smallMargin,
  },
  championInvited: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    marginLeft: Metrics.baseMargin,
  },
  championInvitedText: {
    fontWeight: '600',
    color: Colors.primary,
  },
  imageWrapper: {
    position: 'relative',
  },
  checkIconWrapper: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: -25,
    borderRadius: 25,
    backgroundColor: Colors.green,
    borderColor: Colors.white,
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    fontSize: Metrics.icons.md,
    color: Colors.white,
    alignSelf: 'center',
  },
  cardTitle: {
    marginTop: Metrics.baseMargin,
  },
})
