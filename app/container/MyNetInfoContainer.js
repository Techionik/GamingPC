import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { connect } from 'react-redux'
import { Color, Styles } from '../common'
import { toast } from '../Omni'

const mapStateToProps = (state) => {
  return {
    netInfoConnected: state.app.netInfoConnected
  }
}

class MyNetInfo extends PureComponent {
  constructor (props) {
    super(props)

    this.skipFirstToast = true
  }

  componentDidMount () {
    this.unsubscribe = NetInfo.addEventListener(state => {
      const { isConnected } = state
      if (!isConnected) return

      if (!this.skipFirstToast) {
        // toast("Regain internet connection");
      } else {
        this.skipFirstToast = false
      }
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { netInfoConnected } = this.props
    if (netInfoConnected) return <View />
    return (
      <View style={styles.connectionStatus}>
        <Text style={styles.connectionText}>{'No Internet Connection'}</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps)(MyNetInfo)

const styles = StyleSheet.create({
  connectionStatus: {
    top: 0,
    width: Styles.width,
    backgroundColor: Color.error,
    alignItems: 'center'
  },
  connectionText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold'
  }
})
