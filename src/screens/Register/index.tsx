import React, { useEffect, useState } from 'react'
import { View, Text, KeyboardAvoidingView, StatusBar } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles'
import { Input, Button } from 'react-native-elements'

import { LinearGradient } from 'expo-linear-gradient'

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#348ac7', '#7474bf']}
      style={{ flex: 1, paddingTop: 20 }}
    >
      {children}
    </LinearGradient>
  )
}

export default ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    navigation.setOptions({
      title: 'Login',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#348ac7',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '400',
      },
    })
  }, [])

  return (
    <Background>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.form}>
          <Input
            placeholderTextColor='#c1c1e4'
            inputContainerStyle={{borderBottomWidth: 0.5, borderBottomColor: '#c1c1e4'}}
            inputStyle={styles.input}
            placeholder='Your email...'
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholderTextColor='#c1c1e4'
            inputContainerStyle={{borderBottomWidth: 0.5, borderBottomColor: '#c1c1e4'}}
            placeholder="your password..."
            secureTextEntry
            value={password}
            inputStyle={styles.input}
            onChangeText={text => setPassword(text)}
          />
          <View style={{ marginTop: 5 }}>
            <Button
              titleStyle={{ color: '#b9d8ee' }}
              buttonStyle={{ borderRadius: 50 }}
              icon={
                <Icon
                  name="sign-in"
                  size={15}
                  color="#d4edff"
                />
              }
              title=" Login"
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Button
              titleStyle={{ color: '#b9d8ee' }}
              buttonStyle={{ borderRadius: 50, borderWidth: 1.5 }}
              icon={
                <Icon
                  name="user-plus"
                  size={15}
                  color="#d7e4ed"
                />
              }
              type="outline"
              title=" Register"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  )
}
