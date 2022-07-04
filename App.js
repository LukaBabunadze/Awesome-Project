import Index from './Index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Recommendations } from './Recommendations';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Details } from './Details';
import MyImagePicker from './components/MyImagePicker';

const Bottom = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false, tabBarStyle: {height: 55}, tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'black'}}>
      <Stack.Screen name="Index" component={Index}/>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="MyImagePicker" component={MyImagePicker}/>
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Bottom.Navigator screenOptions={{headerShown: false, tabBarStyle: {height: 55}, tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'black'}}>
        <Bottom.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({color}) => <AntDesign name="home" color={color} size={24} style={s.iconStyle} />,
            tabBarIconStyle: s.iconBarStyle,
            tabBarLabel: "Home",
            tabBarLabelStyle: s.labelStyle,
            }}
        />
        <Bottom.Screen 
          name="Recommendations" 
          component={Recommendations}
          options={{
            tabBarIcon: ({color}) => <Ionicons name="notifications-outline" size={24} color={color} />,
            tabBarIconStyle: s.iconBarStyle,
            tabBarLabel: "Recommendations",
            tabBarLabelStyle: s.labelStyle,
            headerShown: true,
          }} 
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  iconStyle: {

  },
  labelStyle: {
    fontSize: 16,
  },
  iconBarStyle: {
    marginTop: 5,
  },
  container: {
    backgroundColor: 'black'
  }
})

