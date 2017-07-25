// @flow

import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Txt } from '../'
import s from './styles'

const Article = (article) =>
  <TouchableOpacity style={s.article} onPress={() => article.onPress(article)}>
    <Image
      style={s.articleImage}
      source={{uri: article.image}}
    />
    <View style={s.articleDetails}>
      <View style={s.articleNameWrapper}>
        <Txt style={s.articleName}>
          {article.name}
        </Txt>
      </View>
      <View style={s.articleDescriptionWrapper}>
        <Txt style={s.articleDescription}>
          {article.description}
        </Txt>
      </View>
    </View>
    <View style={s.articleArrowWrapper}>
      <Icon
        name='keyboard-arrow-right'
        style={s.articleArrow}
      />
    </View>
  </TouchableOpacity>

export default Article
