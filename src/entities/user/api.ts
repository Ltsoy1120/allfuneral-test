import { http } from '@/api/http'
import { AuthResponse } from './model'

export const authorize = async (username: string): Promise<AuthResponse> => {
  const response = await http.get(`/auth`, {
    params: { user: username },
  })

  const token = response.headers['authorization']?.replace('Bearer ', '')
  if (!token) {
    throw new Error('Authorization token not found')
  }

  return { token }
}
