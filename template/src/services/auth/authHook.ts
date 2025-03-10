import { UseMutationResult, useMutation } from "@tanstack/react-query"
import authApi, { LoginParams, LoginResponse } from "./authApi"

export const useLogin = (): UseMutationResult<LoginResponse, Error, LoginParams> => {
  return useMutation<LoginResponse, Error, LoginParams>({
    mutationFn: (params: LoginParams) => authApi.login(params),
  })
}
