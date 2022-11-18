import { StyleSheet, View } from 'react-native'
import React from 'react'
import Main from './components/Main'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'


export default function App() {
  return (
   <Provider store={store} >
      <View style={styles.iconStyle}>
       <Main />
    </View>
   </Provider>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  
  },
});
