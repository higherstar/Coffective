import React from 'react'
import {ScrollView} from 'react-native'
import {Card, Txt} from '../../components'
import s from './HoursStyles'

// TODO fix backend
const DAYS = [
  {
    title: 'Monday',
    dayProp: 'monday_hours',
    fromProp: 'from_mon_hours',
    toProp: 'to_mon_hours',
  },
  {
    title: 'Tuesday',
    dayProp: 'tuesday_hours',
    fromProp: 'from_tue_hours',
    toProp: 'to_tue_hours',
  },
  {
    title: 'Wednesday',
    dayProp: 'wednesday_hours',
    fromProp: 'from_wed_hours',
    toProp: 'to_wed_hours',
  },
  {
    title: 'Thursday',
    dayProp: 'thursday_hours',
    fromProp: 'from_thu_hours',
    toProp: 'to_thu_hours',
  },
  {
    title: 'Friday',
    dayProp: 'friday_hours',
    fromProp: 'from_fri_hours',
    toProp: 'to_fri_hours',
  },
  {
    title: 'Saturday',
    dayProp: 'saturday_hours',
    fromProp: 'from_sat_hours',
    toProp: 'to_sat_hours',
  },
  {
    title: 'Sunday',
    dayProp: 'sunday_hours',
    fromProp: 'from_sun_hours',
    toProp: 'to_sun_hours',
  },
]

const Hours = (days) =>
  <React.Fragment>
    <Txt.View style={s.header} textStyle={s.headerText}>{'Working Hours'}</Txt.View>
    <ScrollView style={s.days} horizontal>
      {DAYS.map((day, i) =>
        days[day.dayProp] ? (
          <Card
            key={day.title}
            title={day.title}
            style={[s.card, i === 0 && s.first]}
            titleStyle={s.cardTitle}
            titleTextStyle={s.cardTitleText}
            bodyStyle={s.cardBody}
          >
            <Txt.View textStyle={s.hoursText}>
              {`${days[day.dayProp][0][day.fromProp]} - ${days[day.dayProp][0][day.toProp]}`}
            </Txt.View>
          </Card>
        ) : null
      )}
    </ScrollView>
  </React.Fragment>

export default Hours
