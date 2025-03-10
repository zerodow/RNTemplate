import { View, Text, Button } from "react-native"
import { remove } from "@/utils/storage"
import STORAGE_KEY from "@/utils/storage/storageKey"

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Logout" onPress={() => remove(STORAGE_KEY.LOGGED_IN)} />
    </View>
  )
}

export default ProfileScreen
