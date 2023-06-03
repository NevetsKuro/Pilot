import React from 'react'
import { View, Text } from 'react-native'
import {
  Avatar,
  Bubble,
  SystemMessage,
  Message,
  MessageText
} from 'react-native-gifted-chat'

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    containerStyle={{ left: {}, right: {} }}
    imageStyle={{ left: {}, right: {} }}
  />
)

export const renderBubble = (props) => (
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={{
      left: { backgroundColor: '#ffa69e' },
      right: { backgroundColor: '#ffa69e' }
    }}
    wrapperStyle={{
      left: { backgroundColor: '#ffa69e' },
      right: { backgroundColor: '#ffa69e' }
    }}
    bottomContainerStyle={{
      left: {},
      right: {}
    }}
    tickStyle={{}}
    containerToNextStyle={{
      left: {},
      right: {}
    }}
    containerToPreviousStyle={{
      left: {},
      right: {}
    }}
  />
)

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
    containerStyle={{}}
    wrapperStyle={{}}
    textStyle={{}}
  />
)

export const renderMessage = (props) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    containerStyle={{
      left: { backgroundColor: 'lime' },
      right: { backgroundColor: 'gold' }
    }}
  />
)

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: 'yellow' },
      right: { backgroundColor: 'blue' }
    }}
    textStyle={{
      left: { color: 'red' },
      right: { color: 'green' }
    }}
    linkStyle={{
      left: { color: 'orange' },
      right: { color: 'orange' }
    }}
  />
)
