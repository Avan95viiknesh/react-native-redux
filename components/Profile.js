import { StyleSheet, View, Switch } from 'react-native'
import React, { useState } from "react";


export default function Profile() {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleEnabled = () => {
    setIsEnabled(previousState  => !previousState);
  };
  

  return (
   <>
   
    <View style={[isEnabled ?styles.lightMode:styles.darkMode ]}>
    <Switch
    trackColor={{ false: "#767577", true: "#81b0ff" }}
    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    onValueChange={toggleEnabled}
    value={isEnabled}
  />
    </View></>
  )
}

const styles = StyleSheet.create({
  lightMode: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor:'white'
  },
 
  darkMode: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor:'black',
    

},

});
