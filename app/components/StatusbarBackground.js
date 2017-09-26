import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default class StatusbarBackground extends Component {
  render() {
    return (
      <View style={styles.statusbarBackground}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusbarBackground: {
    height: 20
  }
})
