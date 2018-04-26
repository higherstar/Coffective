// @flow
import React from 'react'
import { Image, ScrollView, View, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, Img, List, Txt } from '../../components'
import s from './WicEligibleStyles'
import { getNumber } from '../../reducers/wiceligible'
import { Images } from '../../themes'
import UserIcon from './../../static/users.png'
import Arrow from './../../static/arrow.png'
// import { get } from 'lodash'
import { BackButton } from '../../navigation/AppNavigation'

class WicEligible extends React.Component {
  state = {
    number: null,
    title: null
  }

  static navigationOptions = ({ navigation }) => ({
    headerRight: null,
    headerTitle: 'WIC Eligibility',
    headerLeft: <BackButton navigation={navigation} />
  })

  componentDidMount() {
    console.log(this.props.getNumber())
    const number = this.props
      .getNumber()
      .then(res =>
        this.setState(
          {
            number: res.number[0].acf,
            title: res.number[0].title.rendered
          },
          () => {
            console.log(this.state)
          }
        )
      )
      .catch(() => console.log('Something went wrong 🤬'))
  }

  render() {
    console.log('state', this.state)
    const { navigation } = this.props
    // const { category } = navigation.state.params
    if (this.state.number || this.state.title) {
      console.log('💅🏻', this.state.number)
      console.log('🙋🏻‍', this.state.title)
    }

    const actions = {
      'choose-your-hospital': [
        <Button
          key="1"
          size="sm"
          outline
          type="primary"
          onClick={() => navigation.navigate('FindSupport')}>
          See hospitals in your area
        </Button>
      ]
    }

    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image style={s.backgroundImage} source={Images.wicBackground} />
        </View>
        <ScrollView style={s.content} contentContainerStyle={s.scrollContent}>
          <Card
            style={s.card}
            cover={<Img style={s.image} source={Images.wicImage} />}>
            <Txt.View style={s.cardTitle} textStyle={s.cardTitleText}>
              Are you eligible for WIC
            </Txt.View>
            <Txt.View
              style={s.cardDescription}
              textStyle={s.cardDescriptionText}>
              We just need a bit of information to see if you’re eligible for
              WIC services.{' '}
            </Txt.View>
          </Card>
          <Card style={s.card}>
            <View style={s.headView}>
              >
              <View
                style={[s.cardTitleBottom]}
                textStyle={[s.houseHoldText, s.cardDescription]}>
                <Image source={UserIcon} style={s.userIcon} />
                <Text style={s.textHead}>
                  <Text style={s.member}>
                    Household members:{' '}
                    <Text style={s.howmuch}>{this.state.title}</Text>
                  </Text>
                </Text>
                <Image source={Arrow} style={s.arrowIcon} />
              </View>
            </View>

            {this.state.title !== 0 ? (
              <View>
                <View style={s.flex}>
                  <ImageBackground
                    style={s.houseHoldCard}
                    source={Images.holdeNameGradient}>
                    <Txt.View textStyle={s.cost}>
                      ${this.state.number ? this.state.number.per_year : null}
                    </Txt.View>
                    <Txt.View textStyle={s.time}>PER YEAR</Txt.View>
                  </ImageBackground>

                  <ImageBackground
                    style={s.houseHoldCard}
                    source={Images.holdeNameGradient}>
                    <Txt.View textStyle={s.cost}>
                      ${this.state.number ? this.state.number.per_month : null}
                    </Txt.View>
                    <Txt.View textStyle={s.time}>PER MONTH</Txt.View>
                  </ImageBackground>

                  <ImageBackground
                    style={s.houseHoldCard}
                    source={Images.holdeNameGradient}>
                    <Txt.View textStyle={s.cost}>
                      {' '}
                      ${this.state.number ? this.state.number.per_week : null}
                    </Txt.View>
                    <Txt.View textStyle={s.time}>PER WEEK</Txt.View>
                  </ImageBackground>
                </View>
                <Txt.View style={s.houseHoldIncome} textStyle={s.info}>
                  Is your household income below the figures? If so, then you
                  qualify for WIC benefits.
                </Txt.View>
              </View>
            ) : (
              <View>
                <Txt.View style={s.houseHoldIncome} textStyle={s.info}>
                  Number of household of members (including unborn children)
                </Txt.View>
              </View>
            )}
          </Card>
          <Button style={s.buttonSpecial} type="primary">
            I QUALIFY, CHOOSE MY CLINIC
          </Button>
          <Button style={s.buttonSpecial}>I DON’T QUALIFY</Button>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  Number: state.number
})

const mapDispatchToProps = {
  getNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(WicEligible)
