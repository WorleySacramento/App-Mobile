import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './home';
import Calendario from './calendario';
import Clima from './clima';
import Details from './Details';
const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator
    
    >
      <Tab.Screen
      
      options={{
        
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => {
          return <Icon name="home" size={size} color={color} />;
        },
      }}
       name="Home" component={Home} />

<Tab.Screen
       options={{
        tabBarLabel: 'Clima',
        headerShown:false,
        // tabBarHideOnKeyboard: false, 
        tabBarIcon: ({ color, size }) => {
          return <Icon name="sun-thermometer-outline" size={size} color={color} />;
        },
      }}
        name="Clima" 
        
        component={Clima} />

<Tab.Screen
       options={{
        tabBarLabel: 'Details',
        tabBarShowLabel:false,
        headerShown:false,
        // tabBarHideOnKeyboard: false, 
        tabBarIcon: ({ color, size }) => {
          return <Icon name="sun-thermometer-outline" size={size} color={color} />;
        },
      }}
        name="Details" 
        
        component={Details} />

<Tab.Screen
       options={{
        tabBarLabel: 'Calendario',
        tabBarIcon: ({ color, size }) => {
          return <Icon name="calendar-month" size={size} color={color} />;
        },
      }}
        name="Calendario" component={Calendario} />

      <Tab.Screen
       options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => {
          return <Icon name="cog" size={size} color={color} />;
        },
      }}
        name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text variant="headlineMedium">Home!</Text>
//     </View>
//   );
// }

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});