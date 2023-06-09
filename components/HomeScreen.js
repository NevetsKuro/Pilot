import * as React from 'react'
import { StyleSheet, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const [animating, setAnimating] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setAnimating(false)
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      navigation.navigate('ChatScreen', { username: 'user' })
    }, 1000)
  }, [])

  return (
    <View style={styles.mainBody}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ChatScreen', { username: 'user' })}
      >
        <Image
          source={require('../assets/bot-animation.gif')}
          style={{ width: '100%', resizeMode: 'contain', marginLeft: 'auto' }}
        />
      </TouchableOpacity>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#307ecc',
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen
