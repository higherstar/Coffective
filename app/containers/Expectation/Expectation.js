// @flow
import React from 'react'
import { Image, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Button, Txt } from '../../components'
import s from './ExpectationStyles'
import { setExpectation } from '../../reducers/register'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'
import { SkipButton } from '../../navigation/AppNavigation'
// import HorizontalPicker from 'react-native-hpicker'

class Expectation extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <SkipButton navigation={navigation} routeName='Register'/>
    )
  })

  // state = {
  //   pickerValue: 1,
  // }

  render () {
    const {setExpectation, navigation} = this.props
    return (
      <View style={s.container}>
        <View style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('expectationHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('expectationDescription')}
          </Txt.View>
          <View style={s.imageWrapper}>
            <Image source={Images.mother} style={s.image}/>
          </View>
        </View>
        <View style={s.footer}>
          <View style={s.picker}>
            {/*<HorizontalPicker*/}
              {/*itemWidth={70}*/}
              {/*selectedValue={this.state.pickerValue}*/}
              {/*onChange={(pickerValue) => this.setState({pickerValue})}*/}
            {/*>*/}
              {/*<HorizontalPicker.Item label={1} value={1} />*/}
              {/*<HorizontalPicker.Item label={2} value={2} />*/}
              {/*<HorizontalPicker.Item label={3} value={3} />*/}
            {/*</HorizontalPicker>*/}
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
