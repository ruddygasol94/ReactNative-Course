import React from 'react'
import { KeyboardAvoidingView, Image, Switch, TextInput, StyleSheet } from 'react-native'

export default class MyForm extends React.Component {
  state = {
    input: '@tylermcginnis',
    showInput: false,
  }
  handleToggleSwitch = () => {
    this.setState((state) => ({
      showInput: !state.showInput,
    }))
  }
  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }
  render() {
    const { showInput, input } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Image style={styles.img} source={require('../../1907.jpg')} />
        <View style={{margin: 50}} />
        <Image style={styles.img} source={{uri: 'https://banner2.cleanpng.com/20180305/uxq/kisspng-download-triangular-shape-background-shading-5a9d5af03c3e84.3353174815202618722468.jpg'}} />
        <Image
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
          style={styles.img}
        />
        <Switch
          value={showInput}
          onValueChange={this.handleToggleSwitch}
        />
  
        {showInput === true &&
          <TextInput
            value={input}
            style={styles.input}
            onChange={this.handleTextChange}
          />
        }
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
  },
  img: {
    width: 100,
    height: 100,
    margin: 50
  }
})