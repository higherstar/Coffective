import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { TextView, ButtonN, Input } from '../../Components'
import s from './styles'
import { Colors } from '../../Themes'

class SetZipScreen extends React.Component {
  static navigationOptions = {
    headerRight: null,
  }

  state = {
    zip: ''
  }

  handleChangeZip = (zip) => {
    this.setState({ zip })
  }

  render () {
    const { zip } = this.state
    return (
      <View style={s.container}>
        <TextView style={s.header} textStyle={s.headerText} textType='h3'>
          We need to know where you are located
        </TextView>
        <ButtonN style={s.useLocationServiceBtn} btnType='white' size='lg'>
          Use location service
        </ButtonN>
        <Input
          style={s.zip}
          inputStyle={s.zipInput}
          size='lg'
          placeholderTextColor={Colors.white}
          placeholder='Or enter your zip code'
          onChangeText={this.handleChangeZip}
          value={zip}
        />
        {!!zip && (
          <ButtonN style={s.useZipCodeBtn} btnType='white' size='lg'>
            Use Zip Code
          </ButtonN>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  // ...state.SetZip
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(SetZipScreen)
