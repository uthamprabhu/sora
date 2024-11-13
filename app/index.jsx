import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl">sora!!!</Text>
      <StatusBar style='auto' />
      <Link href="/home" className='text-3xl text-blue-600'>Go to profile</Link>
    </View>
  )
}

export default index