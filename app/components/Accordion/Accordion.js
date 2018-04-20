// @flow
import React from 'react'
import { View } from 'react-native'
import {Txt} from '../'
import s from './AccordionStyles'
import RNAccordion from 'react-native-collapsible/Accordion'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Colors } from '../../themes'
import get from 'lodash/get'

const AccordionHeader = ({ header, icon }) =>
  <View style={s.row}>
    <Txt.View style={s.header} textStyle={s.headerText}>{header}</Txt.View>
    {icon || (
      <Icon
        name='plus-circle'
        style={s.icon}
      />
    )}
  </View>

const AccordionDescription = ({ description, isActive }) =>
  <Txt.View style={[s.description, isActive && s.isActive]} textStyle={s.descriptionText}>{description}</Txt.View>

class Accordion extends React.Component {
  static defaultProps = {
    underlayColor: Colors.transparent,
  }

  render () {
    const {sections, headerProp, descriptionProp, icon, ...props} = this.props
    return (
      <RNAccordion
        sections={sections}
        renderHeader={(data, index, isActive) => (
          <View><AccordionHeader header={get(data, headerProp)} icon={icon}/></View>
        )}
        renderContent={(data, index, isActive) => (
          <View><AccordionDescription description={get(data, descriptionProp)} isActive={isActive}/></View>
        )}
        {...props}
      />
    )
  }
}

export default Accordion
