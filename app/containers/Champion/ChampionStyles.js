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
  image: {
    resizeMode: 'cover',
    width: null,
    height: 200,
    flex: 1,
  },
  checkIconWrapper: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: -25,
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
  title: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingHorizontal: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin * 1.5,
  },
  titleText: {
    color: Colors.grey,
    fontWeight: '500',
    fontFamily: Fonts.type.secondary,
    fontSize: Fonts.size.medium,
  },
})
