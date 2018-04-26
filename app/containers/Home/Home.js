// @flow
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View, ImageBackground } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Carousel } from '../../components'
import s from './HomeStyles'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
import { getSlides, getHomeScreen } from '../../reducers/home'

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return ({
      headerRight: null,
      headerTitle: navigation.state.params && navigation.state.params.user ? `Welcome, ${navigation.state.params.user.name}` : '',
      headerTitleStyle: s.title,
      headerLeft: (
        <DrawerButton navigation={navigation}/>
      )
    })
  }

  componentDidMount () {
    // https://github.com/react-navigation/react-navigation/issues/313
    this.props.navigation.setParams({user: this.props.user});
    this.props.getSlides();
    this.props.getHomeScreen();
  }

  render () {
    const {navigation, slides, home} = this.props;
    // TODO add small carousel
    return (
      <View style={s.container}>
        <View style={s.head}>
          <Image
            style={s.backgroundImage}
            source={Images.homeBackground}
          />
        </View>
        <ScrollView style={s.content}>
          {
            slides ?
              <Carousel
                style={s.carousel}
                itemStyle={s.itemWrapper}
                dotsStyle={s.dots}
                dotStyle={s.dot}
                activeDotStyle={s.activeDot}
              >
                {slides.map((item, i) =>
                  <View key={i} style={s.item}>
                    <Txt.View style={s.subHeader} textStyle={s.subHeaderText}>
                      {item.title.toUpperCase()}
                    </Txt.View>
                    <View>
                      <Image
                        style={s.slideImage}
                        source={{uri: item.image}}
                      />
                      <View style={s.slideTextBody}>
                        <Txt.View type='light' size='h4' style={s.header} textStyle={s.headerText}>
                          {item.sub_title}
                        </Txt.View>
                        <Txt.View type='mediumText' size='medium' style={s.description} textStyle={s.descriptionText}>
                          {item.short_description}
                        </Txt.View>
                        <Txt.View type='mediumText' size='medium' style={s.more} textStyle={s.moreText}>
                          More
                        </Txt.View>
                      </View>
                    </View>
                  </View>
                )}
              </Carousel>
              : ''
          }
          {
            home && home.length ?
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Checklist')}
              >
                <ImageBackground
                  style={s.buildTopTeamCard}
                  source={{ uri: home[0].banner_image }}
                >
                  <Txt.View textStyle={s.buildTopTeamHeaderText}>
                    {home[0].acf.text}
                  </Txt.View>
                  <Txt.View textStyle={s.buildTopTeamDescriptionText}>
                    {home[0].title.rendered}
                  </Txt.View>
                </ImageBackground>
              </TouchableOpacity>
              : ''
          }
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Checklist')}
          >
            <ImageBackground
              style={s.buildTeamCard}
              source={Images.checkcListBackground}
            >
              <Txt.View textStyle={s.buildTeamHeaderText}>
                {'Checklist'}
              </Txt.View>
              <Txt.View textStyle={s.buildTeamDescriptionText}>
                {'Get you and your baby off to a great start'}
              </Txt.View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('BuildTeam')}
          >
            <ImageBackground
              style={s.buildTeamCard}
              source={Images.buildMyTeamBackground}
            >
              <Txt.View textStyle={s.buildTeamHeaderText}>
                {I18n.t('buildTeamHeader')}
              </Txt.View>
              <Txt.View textStyle={s.buildTeamDescriptionText}>
                {I18n.t('buildTeamDescription')}
              </Txt.View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ...state.home,
  user: state.user.user,
})

const mapDispatchToProps = {
  getSlides,
  getHomeScreen
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
