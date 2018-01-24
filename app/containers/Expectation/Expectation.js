// @flow
import React from 'react'
import { Image, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Txt, HorizontalPicker } from '../../components'
import s from './ExpectationStyles'
import { setExpectation } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'
import { SkipButton } from '../../navigation/AppNavigation'

class Expectation extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: null,
    headerRight: (
      <SkipButton navigation={navigation} routeName='Register'/>
    )
  })

  state = {
    pickerValue: 1,
  }

  render () {
    const {setExpectation, navigation} = this.props
    const {pickerValue} = this.state

    return (
      <View style={s.container}>
        <Image
          style={s.backgroundImage}
          source={Images.expectationBackground}
        />
        <View style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('expectationHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('expectationDescription')}
          </Txt.View>
          <View style={s.imageWrapper}>
            <Image source={Images.expectation[pickerValue]} style={s.image}/>
          </View>
        </View>
        <View style={s.footer}>
          <View style={s.picker}>
            <HorizontalPicker
              itemWidth={70}
              selectedValue={pickerValue}
              onChange={(pickerValue) => {
                this.setState({pickerValue})
              }}
            >
              {[...Array(10).keys()].map(week =>
                <HorizontalPicker.Item key={week} label={`${week + 1} week`} value={week + 1} />
              )}
            </HorizontalPicker>
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
