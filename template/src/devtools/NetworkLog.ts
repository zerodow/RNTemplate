import { startNetworkLogging } from "react-native-network-logger"

startNetworkLogging({
  maxRequests: 50,
  forceEnable: true,
  ignoredUrls: ["/symbolicate/"],
})
