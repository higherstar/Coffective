import React from 'react'
import { connect } from 'react-redux'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Txt, Img } from '../../components'
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
    image: Images.ages['under15'],
  },
  {
    value: '16-18',
    label: '16-18',
    image: Images.ages['16-18'],
  },
  {
    value: '18-25',
    label: '18-25',
    image: Images.ages['18-25'],
  },
  {
    value: '25-35',
    label: '25-35',
    image: Images.ages['25-35'],
  },
  {
    value: '35-45',
    label: '35-45',
    image: Images.ages['35-45'],
  },
  {
    value: '50+',
    label: '50+',
    image: Images.ages['50+'],
  },
]

class Age extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: null,
    headerRight: (
      <SkipButton navigation={navigation} routeName='Expectation'/>
    ),
    drawerLockMode: 'locked-closed',
  })

  render () {
    const {setAge, personType, navigation} = this.props
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            source={Images.ageBackground}
            style={s.backgroundImage}
          />
        </View>
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
                style={s.age}
                onPress={() => {
                  setAge(age);
                  console.log(personType);
                  if(personType.value === 'mom')
                    navigation.navigate('Expectation');
                  else
                    navigation.navigate('Register');
                }}
              >
                <Img source={age.image} style={s.image}/>
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
