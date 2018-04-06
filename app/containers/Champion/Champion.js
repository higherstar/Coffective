// @flow
import React from 'react'
import { Image, ScrollView, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, Input, Link, Txt } from '../../components'
import s from './ChampionStyles'
import { AppStyles, Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { setInvited } from '../../reducers/champion'

class Champion extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    title: I18n.t('championTitle'),
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  render () {
    const {role, navigation, invited, setInvited} = this.props
    return (
      <KeyboardAvoidingView style={s.container} behavior='padding'>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.championBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          {invited && (
            <TouchableOpacity activeOpacity={0.7} style={s.championInvitedCard} onPress={() => setInvited(false)}>
              <Icon
                style={AppStyles.primaryIcon}
                name='trophy'
              />
              <Txt.View style={s.championInvited} textStyle={s.championInvitedText}>{I18n.t('championInvited')}</Txt.View>
              <Icon
                style={AppStyles.primaryIcon}
                name='pencil'
              />
            </TouchableOpacity>
          )}
          <Card
            style={s.card}
            title={'What to consider when choosing a Champion:'}
            titleStyle={invited && s.cardTitle}
            cover={
              <View style={s.imageWrapper}>
                <Image source={Images.champion}/>
                {invited && (
                  <View style={s.checkIconWrapper}>
                    <Icon
                      style={s.checkIcon}
                      name='check'
                    />
                  </View>
                )}
              </View>
            }
          >
            <Txt.View textStyle={s.cardDescriptionText}>
              {`Being a new mom can be even more special when it’s shared with someone close. A “champion” is a person who supports you and stands up for you. They are with you before, during, and after your baby’s birth. This can be the baby’s dad, your partner, your mom, or someone else who cares about you and the baby.`}
            </Txt.View>
          </Card>
          {!invited && [
            <Txt.View key='sectionHeader' style={s.sectionHeader} textStyle={s.sectionHeaderText}>
              {'Invite Your Champion'}
            </Txt.View>,
            <Card
              key='card'
              style={s.card}
              cover={
                <Input.Group>
                  <Link
                    onClick={() => navigation.navigate('ChampionRole')}
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='trophy'
                      />
                    }
                    textStyle={[s.roleText, role && s.selectedRoleText]}
                  >
                    {role || I18n.t('championRole')}
                  </Link>
                  <Field
                    component={Input}
                    ref={(componentRef) => this.firstName = componentRef}
                    refField='firstName'
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='user'
                      />
                    }
                    focus
                    withRef
                    name='first_name'
                    placeholder={I18n.t('firstName')}
                    returnKeyType='next'
                    onSubmitEditing={() => this.lastName.getRenderedComponent().refs.lastName.focus()}
                  />
                  <Field
                    component={Input}
                    ref={(componentRef) => this.lastName = componentRef}
                    refField='lastName'
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='user'
                      />
                    }
                    focus
                    withRef
                    name='last_name'
                    placeholder={I18n.t('lastName')}
                    returnKeyType='next'
                    onSubmitEditing={() => this.email.getRenderedComponent().refs.email.focus()}
                  />
                  <Field
                    component={Input}
                    ref={(componentRef) => this.email = componentRef}
                    refField='email'
                    style={s.email}
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='envelope'
                      />
                    }
                    focus
                    withRef
                    name='email'
                    placeholder={I18n.t('email')}
                    keyboardType='email-address'
                    returnKeyType='next'
                    onSubmitEditing={() => this.phone.getRenderedComponent().refs.phone.focus()}
                  />
                  <Field
                    component={Input}
                    ref={(componentRef) => this.phone = componentRef}
                    refField='phone'
                    prefix={
                      <Icon
                        style={AppStyles.inputIcon}
                        name='phone'
                      />
                    }
                    focus
                    withRef
                    name='phone'
                    placeholder={I18n.t('phone')}
                    keyboardType='numeric'
                    returnKeyType='done'
                    onSubmitEditing={() => {}}
                    blurOnSubmit
                  />
                </Input.Group>
              }
              actions={[<Button key='1' size='sm' outline type='primary'>{I18n.t('inviteChampion')}</Button>]}
            >
              <Txt.View textStyle={s.cardDescriptionText}>
                {`When you tap Invite Champion we will send your champion an email with information about this app and their important role in helping you reach your goals. They will also be able see all the information about the other members of your care team.`}
              </Txt.View>
            </Card>
          ]}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.champion,
})

const mapDispatchToProps = {
  setInvited,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'champion'
  })(Champion)
)
