import * as React from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const [animating, setAnimating] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setAnimating(false)
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      navigation.navigate('Login')
    }, 2000)
  }, [])

  return (
    <View style={styles.mainBody}>
      <Image
        source={require('../assets/bot-animation.gif')}
        style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
      />
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
