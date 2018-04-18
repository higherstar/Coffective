import React  from 'react'
import { StatusBar, View } from 'react-native'
import ReduxNavigation from '../../navigation/ReduxNavigation'
import { connect } from 'react-redux'
import { startup } from '../../reducers/global'
import ReduxPersist from '../../config/ReduxPersist'
import s from './RootStyles'
import { getTokenFromStorage, getUser } from '../../reducers/user'
import { MessageBarManager, MessageBar } from 'react-native-message-bar'
import { Colors } from '../../themes'

class RootContainer extends React.Component {
  checkIfLoggedIn = async () => {
    await this.props.getTokenFromStorage()
    await this.props.getUser()
  }

  componentDidMount () {
    this.checkIfLoggedIn()
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    MessageBarManager.registerMessageBar(this.refs.alert)
  }

  componentWillUnmount () {
    MessageBarManager.unregisterMessageBar()
  }

  render () {
    return (
      <View style={s.applicationView}>
        <StatusBar barStyle='light-content'/>
        <ReduxNavigation/>
        <MessageBar
          ref='alert'
          viewTopInset={10}
          messageStyle={s.message}
          titleStyle={s.messageTitle}
          stylesheetSuccess={{
            backgroundColor: Colors.success,
            strokeColor: Colors.success,
            titleColor: Colors.white,
            messageColor: Colors.white,
          }}
          stylesheetWarning={{
            backgroundColor: Colors.warning,
            strokeColor: Colors.warning,
            titleColor: Colors.white,
            messageColor: Colors.white,
          }}
          stylesheetError={{
            backgroundColor: Colors.error,
            strokeColor: Colors.error,
            titleColor: Colors.white,
            messageColor: Colors.white,
          }}
          stylesheetInfo={{
            backgroundColor: Colors.info,
            strokeColor: Colors.info,
            titleColor: Colors.white,
            messageColor: Colors.white,
          }}
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  startup,
  getUser,
  getTokenFromStorage,
}

export default connect(null, mapDispatchToProps)(RootContainer)
