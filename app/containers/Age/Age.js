import React from 'react'
import { connect } from 'react-redux'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Txt } from '../../components'
import I18n from 'react-native-i18n'
import s from './AgeStyles'
import { Images, Metrics } from '../../themes'
import { setAge } from '../../reducers/register'
import { SkipButton } from '../../navigation/AppNavigation'

// TODO move it
const ages = [
  {
    value: '>15',
    label: 'Under 15',
    image: Images.mother,
  },
  {
    value: '16-18',
    label: '16-18',
    image: Images.mother,
  },
  {
    value: '18-25',
    label: '18-25',
    image: Images.mother,
  },
  {
    value: '25-35',
    label: '25-35',
    image: Images.mother,
  },
  {
    value: '35-45',
    label: '35-45',
    image: Images.mother,
  },
  {
    value: '50+',
    label: '50+',
    image: Images.mother,
  },
]

class Age extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <SkipButton navigation={navigation} routeName='Expectation'/>
    )
  })

  render () {
    const {setAge, navigation} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}/>
        <ScrollView style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('ageHeader')}
          </Txt.View>
          <Txt.View style={s.description} textStyle={s.descriptionText}>
            {I18n.t('ageDescription')}
          </Txt.View>
          <View style={s.ages}>
            {ages.map(age =>
              <TouchableOpacity
                key={age.value}
                activeOpacity={0.7}
                style={[s.age, {height: (Metrics.screenHeight - 230) / (ages.length / 2)}]}
                onPress={() => {
                  setAge(age)
                  navigation.navigate('Expectation')
                }}
              >
                <Image source={age.image} style={s.image}/>
                <Txt.View style={s.name} textStyle={s.nameText}>
                  {age.label}
                </Txt.View>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.register,
})

const mapDispatchToProps = {
  setAge,
}

export default connect(mapStateToProps, mapDispatchToProps)(Age)
