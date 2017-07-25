import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Button, Txt } from '../../Components'
import I18n from 'react-native-i18n'
import s from './styles'
import HowItWorksScreen from '../../Containers/HowItWorksScreen'
import {Colors} from '../../Themes'
import ScrollableTabView, { DefaultTabBar }  from 'react-native-scrollable-tab-view'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Accordion from 'react-native-collapsible/Accordion'
import EStyleSheet from 'react-native-extended-stylesheet'

const AccordionHeader = ({ header, index, count }) =>
  <View style={[s.accordionRow, EStyleSheet.child(s, 'accordionRow', index, count)]}>
    <View style={s.accordionHeaderWrapper}>
      <Txt style={s.accordionHeader}>{header}</Txt>
    </View>
    <View>
      <Icon
        name='keyboard-arrow-right'
        style={s.accordionRowIcon}
      />
    </View>
  </View>

const AccordionContent = ({ content, isActive }) =>
  <View style={[s.accordionContentWrapper, s.accordionContentWrapperActive]}>
    <Txt style={s.accordionContent}>{content}</Txt>
  </View>

class ArticleScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'navigation.state.params.article.name',
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      color: Colors.white
    },
    headerTintColor: Colors.white
  })

  state = {
    sections: [
      {
        title: 'Your champion cannot be with you all the time',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
      },
      {
        title: 'Your support person is not sure about breastfeeding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
      },
      {
        title: 'Your support person does not know how to help you in hospital',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
      },
    ]
  }

  openHowItWorksScreen = () => {
    this.props.navigation.navigate('HowItWorksScreen')
  }

  render () {
    const {sections} = this.state
    return (
      <View style={s.container}>
        <ScrollView>
          <Image style={s.image} source={{uri: 'https://dummyimage.com/240x180'}}/>
          <View style={s.section}>
            <View style={s.titleWrapper}>
              <Txt style={s.title}>Introduction</Txt>
            </View>
            <View style={s.descriptionWrapper}>
              <Txt style={s.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
              </Txt>
            </View>
          </View>
          <View style={s.section}>
            <View style={s.titleWrapper}>
              <Txt style={s.title}>How to wait for labor to begin on its own</Txt>
            </View>
            <View style={s.descriptionWrapper}>
              <Txt style={s.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
              </Txt>
            </View>
            <View>
              <View style={s.subtitleWrapper}>
                <Txt style={s.subtitle}>See how it works for the...</Txt>
              </View>
              <ScrollableTabView
                renderTabBar={() => (
                <DefaultTabBar
                  style={s.tabBar}
                  renderTab={(tabLabel, index, isTabActive, onPressHandler, onLayoutHandler) =>
                     <TouchableOpacity
                        style={s.tab}
                        key={index}
                        accessible
                        accessibilityLabel={tabLabel.name}
                        accessibilityTraits='button'
                        onPress={() => onPressHandler(index)}
                        onLayout={onLayoutHandler}
                      >
                        <FAIcon
                          name={tabLabel.icon}
                          style={s.tabIcon}
                        />
                        <View style={s.tabNameWrapper}>
                          <Txt>
                            {tabLabel.name}
                          </Txt>
                        </View>
                      </TouchableOpacity>
                  }
                  underlineStyle={s.tabUnderline}
                />
              )}>
                <View style={s.tabView} tabLabel={{name: 'Mom', icon: 'female'}}>
                  <Button style={s.findOutMore} outline>
                    Find out more
                  </Button>
                </View>
                <View style={s.tabView} tabLabel={{name: 'Baby', icon: 'child'}}>

                </View>
                <View style={s.tabView} tabLabel={{name: 'Champion', icon: 'male'}}>
                  <View style={s.textWrapper}>
                    <Txt style={s.text}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Txt>
                  </View>
                  <Button style={s.findOutMore} outline>
                    Find out more
                  </Button>
                </View>
              </ScrollableTabView>
            </View>
          </View>
          <View style={s.section}>
            <View style={s.titleWrapper}>
              <Txt style={s.title}>
                You'll love waiting for baby to be ready!
              </Txt>
            </View>
            <View style={s.descriptionWrapper}>
              <Txt style={s.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
              </Txt>
            </View>
            <Button style={s.learnMore} outline>
              Learn more about the why's
            </Button>
          </View>
          <View style={s.section}>
            <View style={s.titleWrapper}>
              <Txt style={s.title}>
                You can wait for labor to begin on its own even when...
              </Txt>
            </View>
              <Accordion
                underlayColor={Colors.transparent}
                sections={sections}
                renderHeader={(data, index, isActive) => <View><AccordionHeader header={data.title} index={index} count={sections.length}/></View>}
                renderContent={(data, index, isActive) => <View><AccordionContent content={data.description} isActive={isActive}/></View>}
              />
          </View>
          <View style={s.lastSection}>
            <View style={s.titleWrapper}>
              <Txt style={s.title}>
                And there you have it
              </Txt>
            </View>
            <View style={s.descriptionWrapper}>
              <Txt style={s.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
              </Txt>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={s.wantThisBtn}>
          <Icon
            name='check'
            style={s.wantThisIcon}
          />
          <Txt>
            I'm prepared and I want this
          </Txt>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ArticleScreen
