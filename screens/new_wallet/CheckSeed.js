import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { GoBackIcon, PaginationLeftIcon, PaginationRightIcon } from "../../components/Icons"
import { HeaderText, DescriptionText, Pagination } from "../../components/TextBlocks"
import { Overlay } from '../../components/Overlay'

const Data = "icing lion tarnished wise kettle agenda rift bygones dwarf tiger rift phase ashtray palace superior river italics sabotage seasons badge kiosk technical impel perfect juicy adult northern truth acumen".split(' ')


export class CheckSeed extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'New Wallet',
      headerLeft: (
        <TouchableHighlight
          underlayColor="#FFFFFF"
          onPress={() => { navigation.goBack() }}>
          <GoBackIcon />
        </TouchableHighlight>
      ),
      headerStyle: { borderBottomWidth: 0 }
    }
  }

  constructor (props) {
    super(props)
    const { navigation } = this.props
    const seed = navigation.getParam('seed', Data)
    this.closeOverlay = this.closeOverlay.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.state = {
      seed,
      showOverlay: false,
      overlayText: ''
    }
  }

  closeOverlay () {
    this.setState({ showOverlay: false })
  }

  showOverlay (el) {
    this.setState({
      showOverlay: true,
      overlayText: el
    })
  }

  prevStep () {
    this.props.navigation.goBack()
  }

  nextStep () {
    this.props.navigation.navigate('ValidateSeed')
  }

  render() {
    const { showOverlay, overlayText, seed } = this.state
    return (
      <View style={styles.container}>
        <Overlay text={overlayText} closeOverlay={ this.closeOverlay } showOverlay={showOverlay} />
        <HeaderText text="Check the words" />
        <DescriptionText text={`Make sure you have written all ${seed.length} words in the order in which they are displayed.`} />
        <View style={styles.chipsView}>
          {Data.map((el, index) => {
            let name = `${index+1}. ${el}`
            return (
              <TouchableHighlight key={index}
                onPress={() => this.showOverlay(name)}
                underlayColor="#F7F8FA"
                style={styles.chips}
                >
                  <Text style={styles.chipsText}>{name}</Text>
              </TouchableHighlight>
            )
          })}
        </View>
        <Pagination next={this.nextStep} prev={this.prevStep} text="All words" />
      </View>
    )
  }
}

let styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  chipsView: {
    flex: 4,
    paddingTop: '20@vs',
    width: "95%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  chipsText: {
    color: "#000000",
    lineHeight: '20@s',
    fontSize: '13@vs',
    letterSpacing: -0.2,
  },
  chips: {
    margin: '5@s',
    paddingTop: '7@s',
    paddingBottom: '7@s',
    paddingLeft: '8@s',
    paddingRight: '8@s',
    borderRadius: '12@s',
    backgroundColor: "#F7F8FA",
  }
})