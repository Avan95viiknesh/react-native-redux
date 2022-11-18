import React,{useState, useEffect}  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Switch,StyleSheet } from 'react-native'
import Home from "./Home";
import Fav from "./Fav";
import Profile from './Profile';
import Cart from "./Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from "./redux/changeColor";

const Tab = createBottomTabNavigator();



export default function Main() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const theme = useSelector( (state) => {
    state.color.theme
})
 useEffect (()=>{
  console.log((theme,"chcek"))
 },[theme])

const setColorMode = ()=>{
  console.log("checked theme`",isEnabled)
  dispatch(changeMode())
  setIsEnabled(previousState  => !previousState)
}

const dispatch = useDispatch()
  return (

    <>
     <Switch
       trackColor={{ false: "#767577", true: "#81b0ff" }}
       thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
   // onPress={ () => dispatch(changeMode)}
    onValueChange={setColorMode}
        // value={theme === "light" ? styles.lightMode : styles.darkMode}
    value= {isEnabled}
  
  />

    <NavigationContainer style={[theme  === 'dark'  ?styles.darkMode:styles.lightMode ]}>
      <Tab.Navigator  >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Icon name="home" size={30} color="#900" />,
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={Fav}
          options={{
            tabBarIcon: () => <Icon name="heart" size={30} color="#900" />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: () => (
              <Icon name="shopping-cart" size={30} color="#900" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <Icon name="user" size={30} color="#900" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </>
   
  );
}


const styles = StyleSheet.create({
  lightMode: {
    
    backgroundColor:'white'
  },
 
  darkMode: {
   
    backgroundColor:'black',
    

},

});