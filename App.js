// import { StatusBar } from 'expo-status-bar'
import HomeScreen from './components/HomeScreen'
import LoginScreen from './components/LoginScreen'
import ChatScreen from './components/ChatScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app! Hi</Text>
    //   <StatusBar style="auto" />
    // </View>
  )
}
