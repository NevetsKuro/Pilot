import * as React from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Text
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons/faRobot'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { GiftedChat } from 'react-native-gifted-chat'
import {
  renderBubble,
  renderCustomView,
  renderMessage,
  renderMessageText,
  renderSystemMessage
} from './MessageContainer'

const ChatScreen = ({ route }) => {
  const { username } = route.params

  const initialMessages = [
    {
      _id: 1,
      text: 'This is a system message',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      system: true
    },
    {
      _id: 2,
      text: 'Hello',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: false
    }
  ]
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    setMessages(initialMessages.reverse())
  }, [])

  const onSend = (newMessages = []) => {
    console.log(newMessages)
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages))
    setTimeout(() => {
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            text: 'Hello!',
            createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
            system: false
          }
        ])
      )
    }, 2000)
  }

  return (
    <View style={styles.mainBody}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faRobot} style={styles.botIcon} size={20} />
        <Text style={styles.headerText}>Buddy - The AI chatbot!</Text>
        <FontAwesomeIcon icon={faHome} style={styles.homeIcon} size={20} />
      </View>
      <View style={styles.chatSection}>
        <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={10}>
          <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: username
            }}
            // renderBubble={renderBubble}
            // renderSystemMessage={renderSystemMessage}
            // renderMessage={renderMessage}
            // renderMessageText={renderMessageText}
          />
        </KeyboardAvoidingView>
      </View>
      {/* <View style={styles.inputBar}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(message) => setMessage(message)}
            placeholder="Enter Message"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="ascii-capable"
            returnKeyType="next"
            onSubmitEditing={() => alert('Entered!')}
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          ></TextInput>
        </View> */}
    </View>
  )
}
const styles = StyleSheet.create({
  mainBody: {
    height: '100%',
    width: '100%',
    backgroundColor: '#307ecc',
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    height: 50,
    width: '100%',
    backgroundColor: '#3c37ff',
    paddingLeft: 24
  },
  botIcon: {
    marginTop: 16,
    marginRight: 8,
    color: 'white'
  },
  homeIcon: {
    marginLeft: 'auto',
    marginTop: 16,
    marginRight: 24,
    color: 'white'
  },
  headerText: {
    marginTop: 14,
    color: 'white',
    fontSize: 20
  },
  chatSection: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white'
  },
  inputBar: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
    paddingLeft: 24
  }
})

export default ChatScreen
