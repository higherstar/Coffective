import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { getChecklistGroups } from '../../Redux/ChecklistRedux'
import { Colors } from '../../Themes'
import { connect } from 'react-redux'
import { Txt, ChecklistGroup, Article, ChecklistTab } from '../../Components'
import s from './styles'

class ChecklistScreen extends React.Component {
  static navigationOptions = {
    title: 'Hospital Preparation',
  }

  componentWillMount () {
    this.props.getChecklistGroups()
  }

  openArticleScreen = (article) => {
    this.props.navigation.navigate('ArticleScreen', { article })
  }

  render () {
    const { checklistGroups } = this.props
    return (
      <ScrollableTabView
        style={s.container}
        renderTabBar={() => (
          <ScrollableTabBar
            renderTab={(name, index, isTabActive, onPressHandler, onLayoutHandler) =>
              <ChecklistTab
                key={index}
                index={index}
                name={name}
                onPressHandler={onPressHandler}
                onLayoutHandler={onLayoutHandler}
              />
            }
            underlineStyle={s.tabUnderline}
          />
        )}
      >
        <ScrollView style={s.groups} tabLabel='Checklist'>
          {checklistGroups.map((checklistGroup, i) =>
            <ChecklistGroup
              key={i}
              index={i}
              onCheck={() => {}}
              onPress={this.openArticleScreen}
              {...checklistGroup}
            />
          )}
        </ScrollView>
        {checklistGroups.map((checklistGroup, i) =>
          <ScrollView key={i} tabLabel={checklistGroup.name}>
            {checklistGroup.items.map((article, i) =>
              <Article
                key={i}
                onPress={this.openArticleScreen}
                {...article}
              />
            )}
          </ScrollView>
        )}
      </ScrollableTabView>
    )
  }
}

const mapStateToProps = state => ({
  ...state.Checklist
})

const mapDispatchToProps = {
  getChecklistGroups
}

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistScreen)
