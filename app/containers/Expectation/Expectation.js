// @flow
import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, HorizontalPicker, Img, Txt } from '../../components'
import s from './ExpectationStyles'
import { setExpectation } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images, Colors } from '../../themes'
import { SkipButton } from '../../navigation/AppNavigation'
import { noop } from '../../utils/utils'
import LinearGradient from 'react-native-linear-gradient'

const WEEKS = [...Array(41).keys()].splice(1)
// TODO move it to constants
const LINEAR_GRADIENT = ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.5)']

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
    )
  })

  render () {
    const {setExpectation, navigation, expectation} = this.props
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
            <Img source={Images.expectation[expectation !== null ? expectation === 40 ? 9 : Math.ceil(expectation / 5) : 1]} style={s.image}/>
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
              <TouchableOpacity activeOpacity={0.5} onPress={() => expectation !== 1 ? setExpectation(expectation - 1) : noop}>
                <Img source={Images.slideArrowLeft}/>
              </TouchableOpacity>
              <Txt style={s.expectation}>{`Around ${41 - expectation} week${41 - expectation === 1 ? '' : 's'} from now`}</Txt>
              <TouchableOpacity activeOpacity={0.5} onPress={() => expectation !== 40 ? setExpectation(expectation + 1) : noop}>
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
})

const mapDispatchToProps = {
  setExpectation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Expectation)
