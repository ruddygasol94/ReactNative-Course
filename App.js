import React from 'react';
import { View, Text, StyleSheet, Switch, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import AddEntry from './components/AddEntry'
import MyForm from './components/Tries/Forms'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AddEntry />
      </View>
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

