// @flow
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Button } from '../../components'
import s from './HowItWorksStyles'
import { getSections } from '../../reducers/howItWorks'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'

class HowItWorks extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerLeft: (
      <BackButton navigation={navigation} text={I18n.t('back')}/>
    )
  })

  componentDidMount () {
    // TODO remove if it should not be retrieved from backend
    // this.props.getSections()
  }

  render () {
    const {sections} = this.props
    return (
      <View style={s.container}>
        <Image
          source={Images.howItWorksBackground}
          style={s.backgroundImage}
        />
        <ScrollView style={s.content}>
          <Txt.View style={s.header} textStyle={s.headerText}>
            {I18n.t('howItWorksHeader')}
          </Txt.View>
          {sections.map((section, i) =>
            <View key={i} style={[s.section, i < sections.length - 1 && s.notLast]}>
              <Txt.View style={s.sectionHeader} textStyle={s.sectionHeaderText}>
                {section.header.toUpperCase()}
              </Txt.View>
              <Txt.View style={s.sectionDescription} textStyle={s.sectionDescriptionText}>
                {section.description}
              </Txt.View>
            </View>
          )}
          <View style={s.actions}>
            <Button
              type='default'
              size='xl'
              style={s.submitBtn}
              onClick={() => this.props.navigation.navigate('Checklist')}
              icon={
                <Icon
                  style={s.submitIcon}
                  name='arrow-right'
                />
              }
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.howItWorks,
})

const mapDispatchToProps = {
  getSections,
}

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
