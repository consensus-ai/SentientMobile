import React, { Component } from 'react'
import { Text, View, TouchableHighlight  } from 'react-native'
import { ScaledSheet, scale, verticalScale, moderateScale } from 'react-native-size-matters'

import { PaginationLeftIcon, PaginationRightIcon } from "./Icons"


export class HeaderText extends Component {
  render () {
    const { text } = this.props
    return <Text style={{marginTop: moderateScale(10, 10), fontWeight: '500', fontSize: verticalScale(18), width: "75%", textAlign: "center", letterSpacing: verticalScale(1.2), lineHeight: verticalScale(28)}}>{text}</Text>
  }
}

export class DescriptionText extends Component {
  render () {
    const { text } = this.props
    return <Text style={{width: '80%', marginTop: moderateScale(5, 10), textAlign: "center", fontSize: verticalScale(13), lineHeight: verticalScale(20) }}>{text}</Text>
  }
}

export class Pagination extends Component {
  render () {
    const { next, prev, text } = this.props
    return (
      <View style={styles.pagination}>
        <TouchableHighlight
          style={styles.placeholder}
          underlayColor="#8A8A8D"
          onPress={() => prev()}
          >
          <PaginationLeftIcon />
        </TouchableHighlight>
        <Text style={styles.paginationText}>{text}</Text>
        <TouchableHighlight
          style={styles.placeholder}
          underlayColor="#8A8A8D"
          onPress={() => next()}
          >
          <PaginationRightIcon />
        </TouchableHighlight>
      </View>
    )
  }
}

let styles = ScaledSheet.create({
  placeholder: {
    width: '46@vs',
    height: '46@vs',
    backgroundColor: "#F7F8FA",
    borderRadius: '20@vs',
  },
  pagination: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "88%"
  },
  paginationText: {
    fontSize: '11@s',
    color: '#8A8A8F'
  }
})