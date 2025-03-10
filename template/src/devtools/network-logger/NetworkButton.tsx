import { images } from "@/assets"
import { navigate } from "@/navigators/navigationUtilities"
import { View, StyleSheet, TouchableOpacity, Image } from "react-native"

const NetworkButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigate("Networking")
        }}
        style={styles.wrapper}
      >
        <Image source={images.bug} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default NetworkButton

const styles = StyleSheet.create({
  container: {
    bottom: 80,
    height: 40,

    position: "absolute",
    right: 25,
    width: 40,
    zIndex: 9999,
  },
  icon: {
    height: 20,
    opacity: 0.7,
    width: 20,
  },
  // eslint-disable-next-line react-native/no-color-literals
  wrapper: {
    alignItems: "center",
    backgroundColor: "#D1E0FF",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
})
