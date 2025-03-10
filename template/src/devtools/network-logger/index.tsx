import CommonHeader from "@/components/CommonHeader"
import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import { FC } from "react"
import NetworkLogger from "react-native-network-logger"

export const NetworkScreen: FC<any> = ({}) => (
  <SafeAreaWrapper>
    <CommonHeader title="Net work logger" />
    <NetworkLogger />
  </SafeAreaWrapper>
)
