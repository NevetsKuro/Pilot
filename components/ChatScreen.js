import * as React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons/faRobot'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { Composer, GiftedChat, InputToolbar } from 'react-native-gifted-chat'

const ChatScreen = ({ route }) => {
  const { username } = route.params

  const ENUM = {
    age_category: {
      young: 'YOUNG',
      mature: 'MATURE',
      older: 'OLDER'
    },
    emotion: {
      good: 'GOOD',
      bad: 'BAD',
      depressed: 'DEPRESSED'
    }
  }

  const [indexMsg, setIndex] = React.useState(0)
  const [age, setAGE] = React.useState(null)
  const [emotion, setEmotion] = React.useState(null)
  const [userId, setUserId] = React.useState('');

  const generateId = (randomNumber = 8) => {
    return (
      Math.floor(Math.random() * 10000000 * randomNumber) + new Date().getTime()
    )
  }

  const BotInitialMessages = [
    {
      _id: generateId(1),
      text: "What's your name ?",
      createdAt: new Date(),
      system: false,
      user: { _id: 'user', avatar: 'https://icon-library.com/images/user-icon-png/user-icon-png-16.jpg' }
    },
    {
      _id: generateId(2),
      text: "What's your age ?",
      createdAt: new Date(),
      system: false,
      user: { _id: 'user', avatar: 'https://icon-library.com/images/user-icon-png/user-icon-png-16.jpg' }
    },
    {
      _id: generateId(3),
      text: "What's your mood today ?",
      createdAt: new Date(),
      system: false,
      user: { _id: 'user', avatar: 'https://icon-library.com/images/user-icon-png/user-icon-png-16.jpg' }
    },
    {
      _id: generateId(4),
      text: 'What do you want to talk about ?',
      createdAt: new Date(),
      system: false,
      user: { _id: 'user', avatar: 'https://icon-library.com/images/user-icon-png/user-icon-png-16.jpg' }
    }
  ]

  const initialMessages = [
    {
      _id: 0,
      text: 'This is a system message',
      createdAt: new Date(),
      system: true
    }
  ]
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    setMessages(initialMessages.reverse())
    const randomNumber = Math.ceil(Math.random()*10000000);
    setUserId(randomNumber);
  }, [])

  const appendBotMessage = (data) => {
    const replyMessage = data?.choices?.[0]?.message?.content || ''
    if (replyMessage) {
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            _id: prevMessages.length,
            text: replyMessage,
            createdAt: new Date(),
            system: false,
            user: { _id: 'user', avatar: 'https://icon-library.com/images/user-icon-png/user-icon-png-16.jpg' }
          }
        ])
      )
    }
  }
  const onSend = (newMessages = []) => {
    if (messages.length < 9) {
      if (messages.length === 5) {
        const ageNumber = parseInt(newMessages[0].text)
        if (ageNumber > 0 && ageNumber < 18) {
          setAGE(ENUM.age_category.young)
        }
        if (ageNumber > 17 && ageNumber < 56) {
          setAGE(ENUM.age_category.mature)
        }
        if (ageNumber > 55) {
          setAGE(ENUM.age_category.older)
        }
      }
      if (messages.length === 7) {
        setEmotion(newMessages[0].text)
      }
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, newMessages)
      )
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, BotInitialMessages[indexMsg])
      )
      setIndex((prev) => indexMsg + 1)
      return
    }
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages))
    const URL = `https://cec1-14-143-59-170.in.ngrok.io/new_message?user_id=${userId}&age_category=${age}&emotion=${emotion}&content=${newMessages[0].text}`
    console.log(URL)
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        appendBotMessage(json)
      })
      .catch((err) => {
        console.error('error', err.json())
      })
  }

  return (
    <View style={styles.mainBody}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faRobot} style={styles.botIcon} size={20} />
        <Text style={styles.headerText}>Buddy - Your companion!</Text>
        <FontAwesomeIcon icon={faHome} style={styles.homeIcon} size={20} />
      </View>
      <View style={styles.chatSection}>
        <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={10}>
          <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 12022,
              name: 'Steven',
            }}
          />
        </KeyboardAvoidingView>
      </View>
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
