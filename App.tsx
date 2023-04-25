import { View, Text, SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
   container:{
    backgroundColor:'#fff',
    flex:1,
    padding:10
  },
})