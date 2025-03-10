import Config from "react-native-config"
import { loadString } from "@/utils/storage"
import STORAGE_KEY from "@/utils/storage/storageKey"
import Axios, { InternalAxiosRequestConfig } from "axios"
import createAuthRefreshInterceptor from "axios-auth-refresh"

const userAgent = `base-rn`

export const buildDefaultHeaders = () => {
  return {
    "Content-Type": "application/json",
    "User-Agent": userAgent,
    // "deviceId": getUniqueIdSync(),
    // "App-Version": "EU_1_1.0.0",
    // "deviceInfo": `${getUniqueIdSync()}|mobile_app|${Platform.OS}|0.0.0.0|${getVersion()}|${getBrand()}|${getModel()}`,
  }
}

export const axiosInstance = Axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 20000,
  headers: buildDefaultHeaders(),
})

axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  // Set the auth token to each request, if it is stored
  const authToken = loadString(STORAGE_KEY.AUTH_TOKEN)

  if (config.headers && authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  } else {
    // console.log('No tokens found. Need to log user out and start again!');
  }

  return config
})

const refreshAuth = async () => {
  const refreshToken = loadString(STORAGE_KEY.REFRESH_TOKEN)
  if (refreshToken) {
    // call request to refresh token
    // return postToken(refreshToken)
  } else {
    // console.log('no refresh token, logging user out');
    // logout()
    // return Promise.reject()
  }
}

createAuthRefreshInterceptor(axiosInstance, refreshAuth, {
  statusCodes: [401, 403],
  pauseInstanceWhileRefreshing: true,
})
