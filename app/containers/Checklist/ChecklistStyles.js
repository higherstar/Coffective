import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes'

const headHeight = 50

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.marginX / 2,
    marginBottom: Metrics.marginX / 2,
  },
  group: {
    backgroundColor: Colors.white,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    marginTop: Metrics.marginX / 2,
    ...Metrics.boxShadow,
  },
  groupHead: {
    height: headHeight,
    flexDirection: 'row',
    alignItems: 'center',
    // TODO overflow hidden turns box shadow off - fix it
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  groupName: {
    flex: 1,
  },
  groupNameText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.secondary,
    fontWeight: '500',
  },
  groupIconWrapper: {
    paddingHorizontal: Metrics.smallMargin * 1.5,
  },
  groupIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
  },
  groupImage: {
    resizeMode: 'contain',
    width: headHeight - Metrics.smallMargin,
    height: headHeight - Metrics.smallMargin,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  item: {
    marginLeft: Metrics.smallMargin * 1.5,
    paddingVertical: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notLast: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  itemName: {

  },
  itemNameText: {

  },
  itemNotChecked: {
    color: Colors.muted,
  },
  itemCheckbox: {

  },
  itemLink: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: Metrics.smallMargin * 1.5,
    paddingRight: Metrics.baseMargin,
  },
  itemIcon: {
    alignSelf: 'center',
    fontSize: Metrics.icons.md,
    color: Colors.inputIcon,
  },
})
