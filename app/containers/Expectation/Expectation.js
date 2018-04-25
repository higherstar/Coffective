// @flow
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, HorizontalPicker, Img, Txt } from '../../components'
import s from './ExpectationStyles'
import { setExpectation } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'
import { SkipButton } from '../../navigation/AppNavigation'
import { noop } from '../../utils/utils'
import LinearGradient from 'react-native-linear-gradient'

const WEEKS_COUNT = 41
// 41 is birth
const WEEKS = Array.from(Array(WEEKS_COUNT), (item, i) => i + 1)
// TODO move it to constants
const LINEAR_GRADIENT = ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.5)']

const getExpectationImage = (expectation) => {
  let image = 'month1'
  if (expectation) {
    switch (expectation) {
      case WEEKS_COUNT:
        image = 'birth'
        break
      case WEEKS_COUNT - 1:
        image = 'month9'
        break
      default:
        image = `month${Math.ceil(expectation / 5)}`
        break
    }
  }
  return Images.expectation[image]
}

const getExpectationLabel = (expectation) => {
  if (expectation === WEEKS_COUNT) {
    return `I've given birth`
  }
  return `Around ${WEEKS_COUNT - expectation} week${WEEKS_COUNT - expectation === 1 ? '' : 's'} from now`
}

// TODO move to another component and improve - do not remove wrappers - it doesn't work without them
const PickerLine = () =>
  <View style={s.selected}>
    <View>
      <View style={s.circle}/>
    </View>
    <View>
      <View style={s.dot}/>
    </View>
  </View>

class Expectation extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: null,
    headerRight: (
      // TODO if skip set expectation to null
      <SkipButton navigation={navigation} routeName='Register'/>
    ),
    drawerLockMode: 'locked-closed',
  })

  render () {
    const {setExpectation, navigation, expectation} = this.props;
    return (
      <View style={s.container}>
        <Image
          style={s.backgroundImage}
          source={Images.expectationBackground}
        />
        <LinearGradient colors={LINEAR_GRADIENT} style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('expectationHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('expectationDescription')}
          </Txt.View>
          <View style={s.imageWrapper}>
            <Img
              source={getExpectationImage(expectation)}
              style={s.image}/>
          </View>
        </LinearGradient>
        <View style={s.footer}>
          <View style={s.pickerWrapper}>
            <View style={s.picker}>
              <HorizontalPicker
                itemWidth={20}
                selectedValue={expectation}
                onChange={setExpectation}
              >
                {WEEKS.map(week =>
                  <HorizontalPicker.Item key={week} value={week}>
                    <View style={[s.line, week % 5 === 0 && s.long]}/>
                  </HorizontalPicker.Item>
                )}
              </HorizontalPicker>
              <PickerLine/>
            </View>
            <View style={s.pickerActions}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => expectation !== 1 ? setExpectation(expectation - 1) : noop}
                style={s.arrowBtn}
              >
                <Img source={Images.slideArrowLeft}/>
              </TouchableOpacity>
              <Txt style={s.expectation}>
                {getExpectationLabel(expectation)}
              </Txt>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => expectation !== WEEKS_COUNT ? setExpectation(expectation + 1) : noop}
                style={s.arrowBtn}
              >
                <Img source={Images.slideArrowRight}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={s.actions}>
            <Button
              type='default'
              size='xl'
              style={s.submitBtn}
              onClick={() => navigation.navigate('Register')}
              icon={
                <Icon
                  style={s.submitIcon}
                  name='arrow-right'
                />
              }
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.register,
});

const mapDispatchToProps = {
  setExpectation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expectation)
