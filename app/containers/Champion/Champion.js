import React from 'react'
import { Image, ScrollView, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, Input, Link, Txt, Img } from '../../components'
import s from './ChampionStyles'
import { AppStyles, Images } from '../../themes'
import { BackButton } from '../../navigation/AppNavigation'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { inviteChampion, setInvited, setRole } from '../../reducers/champion'
import Spinner from 'react-native-loading-spinner-overlay'

class Champion extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: null,
    headerTitle: navigation.state.params.category.title.rendered,
    headerLeft: (
      <BackButton navigation={navigation}/>
    )
  })

  componentDidMount () {
    // TODO make it pretty
    if (this.props.user.acf && this.props.user.acf && this.props.user.acf.champion_role) {
      this.props.setRole(this.props.user.acf.champion_role)
      this.props.setInvited(true)
    }
  }

  render () {
    const {role, navigation, invited, setInvited, handleSubmit, loading} = this.props
    const {category} = navigation.state.params
    return (
      <KeyboardAvoidingView style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.championBackground}
          />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent} keyboardShouldPersistTaps='handled'>
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
            title={
              <View>
                {invited && (
                  <View style={s.checkIconWrapper}>
                    <Icon
                      style={s.checkIcon}
                      name='check'
                    />
                  </View>
                )}
                <Txt.View style={[s.title, invited && s.cardTitle]} textStyle={s.titleText}>
                  {category.acf.top_heading}
                </Txt.View>
              </View>
            }
            cover={
              <Img style={s.image} source={{uri: category.acf.top_banner}}/>
            }
          >
            <Txt.View textStyle={s.cardDescriptionText}>
              {category.acf.basic_information}
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
                    withRef
                    name='champion_first_name'
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
                    withRef
                    name='champion_last_name'
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
                    withRef
                    name='champion_email'
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
                    withRef
                    name='champion_phone'
                    placeholder={I18n.t('phone')}
                    keyboardType='numeric'
                    returnKeyType='done'
                    onSubmitEditing={handleSubmit}
                    blurOnSubmit
                  />
                </Input.Group>
              }
              actions={[
                <Button key='1' size='sm' outline type='primary' onClick={handleSubmit}>
                  {I18n.t('inviteChampion')}
                </Button>
              ]}
            >
              <Txt.View textStyle={s.cardDescriptionText}>
                {`When you tap Invite Champion we will send your champion an email with information about this app and their important role in helping you reach your goals. They will also be able see all the information about the other members of your care team.`}
              </Txt.View>
            </Card>
          ]}
        </ScrollView>
        <Spinner visible={loading}/>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.champion,
  user: state.user.user,
  initialValues: {
    // TODO make it pretty
    champion_role: state.user.user.acf ? state.user.user.acf.champion_role : '',
    champion_first_name: state.user.user.acf ? state.user.user.acf.champion_first_name : '',
    champion_last_name: state.user.user.acf ? state.user.user.acf.champion_last_name : '',
    champion_phone: state.user.user.acf ? state.user.user.acf.champion_phone : '',
    champion_email: state.user.user.acf ? state.user.user.acf.champion_email : '',
  }
})

const mapDispatchToProps = {
  setInvited,
  setRole,
  onSubmit: inviteChampion,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'champion'
  })(Champion)
)
