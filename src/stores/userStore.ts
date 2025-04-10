import { authorize } from '@/entities/user/api'
import { makeAutoObservable, runInAction } from 'mobx'

class UserStore {
  token: string | null = localStorage.getItem('token')

  constructor() {
    makeAutoObservable(this)
  }

  async login(username: string) {
    try {
      const data = await authorize(username)
      runInAction(() => {
        this.token = data.token
      })
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.error('Authorization failed:', error)
    }
  }

  logout() {
    runInAction(() => {
      this.token = null
    })
    localStorage.removeItem('token')
  }

  get isAuth() {
    return Boolean(this.token)
  }
}

export const userStore = new UserStore()
