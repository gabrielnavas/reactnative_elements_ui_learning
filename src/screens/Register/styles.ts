import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: Dimensions.get('window').width * 0.80,
  },
  input: {
    color: 'white'
  },
})