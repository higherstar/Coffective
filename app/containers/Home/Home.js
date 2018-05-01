// @flow
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View, ImageBackground, Text } from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Txt, Carousel } from '../../components'
import s from './HomeStyles'
import { Images } from '../../themes'
import { DrawerButton } from '../../navigation/AppNavigation'
import { getSlides, getHomeScreen, getHomeArticles, getHomeCategories } from '../../reducers/home'

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
    this.props.navigation.setParams({user: this.props.user});
    this.props.getSlides();
    this.props.getHomeScreen();
    this.props.getHomeArticles();
    this.props.getHomeCategories();
  }

  moreClick = (navigation, article, category) => {
    navigation.navigate("Article", {
      article,
      category,
      checked: false,
    });
  };

  render () {
    const {navigation, slides, home, articles, categories} = this.props;

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
                {slides.map((item, i) => {
                  const article = articles.find(article => article.title.rendered === item.sub_title);
                  const category = categories.find(category => category.name === item.title.split('"')[1]);
                  return (
                    <View key={i} style={s.item}>
                      <Txt.View style={s.subHeader} textStyle={s.subHeaderText}>
                        {item.title.toUpperCase()}
                      </Txt.View>
                      <View style={s.itemContent}>
                        {
                          (item.image !== "") ?
                            <Image
                            style={s.slideImage}
                            source={{ uri: item.image }}
                            />
                            :
                            <Text></Text>
                        }
                        {
                          item.image !== "" ?
                            <View style={s.slideTextRightBody}>
                              <Txt.View type='light' size='h4' style={s.header}
                                        textStyle={s.headerText}>
                                {item.sub_title}
                              </Txt.View>
                              <Txt.View type='mediumText' size='medium' style={s.description}
                                        textStyle={s.descriptionText}>
                                {item.short_description}
                              </Txt.View>
                              <Txt.View type='mediumText' size='medium' style={s.more}
                                        textStyle={s.moreText}>
                                More
                              </Txt.View>
                            </View>
                            :
                            <View style={s.slideTextBody}>
                              <Txt.View type='light' size='h4' style={s.header}
                                        textStyle={s.headerText}>
                                {item.sub_title}
                              </Txt.View>
                              <Txt.View type='mediumText' size='medium' style={s.description}
                                        textStyle={s.descriptionText}>
                                {item.short_description}
                              </Txt.View>
                              {
                                article && category ?
                                  <TouchableOpacity
                                    onPress={() => this.moreClick(navigation, article, category)}
                                  >
                                    <Txt.View type='mediumText' size='medium' style={s.more}
                                              textStyle={s.moreText}>
                                      More
                                    </Txt.View>
                                  </TouchableOpacity>
                                  : <Text></Text>
                              }
                            </View>
                        }
                      </View>
                    </View>
                  );
                  }
                )}
              </Carousel>
              : <Text></Text>
          }
          {
            home && home.length ?
              home.map( card => {
               return (
                 <TouchableOpacity
                   activeOpacity={0.7}
                   onPress={() =>
                     navigation.navigate("Article", {
                       article: card,
                       category: categories[0],
                       checked: false
                     })
                   }
                 >
                   <ImageBackground
                     style={s.buildTopTeamCard}
                     source={{ uri: card.banner_image }}
                   >
                     <Txt.View textStyle={s.buildTopTeamHeaderText}>
                       {card.acf.text}
                     </Txt.View>
                     <Txt.View textStyle={s.buildTopTeamDescriptionText}>
                       {card.title.rendered}
                     </Txt.View>
                   </ImageBackground>
                 </TouchableOpacity>
               )
              })
              : <Text></Text>
          }
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
  getHomeScreen,
  getHomeArticles,
  getHomeCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
