import { CommonResponse } from "@/types/theme"
import { axiosInstance } from ".."
import { LOGIN_URL } from "../apiEndPoint"

export interface LoginParams {
  email: string
  password: string
}

export interface LoginResponse extends CommonResponse {
  data: {
    token: string
    email: string
    user_id: number
    user_role: string
  }
}

const authApi = {
  login: async (params: LoginParams): Promise<LoginResponse> => {
    const response = await axiosInstance.post(LOGIN_URL, params)

    return response.data
  },
}

export default authApi
