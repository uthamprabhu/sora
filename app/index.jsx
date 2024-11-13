import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>sora!!!</Text>
      <StatusBar style='auto' />
      <Link href="/profile" style={{color: 'blue'}}>Go to profile</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
