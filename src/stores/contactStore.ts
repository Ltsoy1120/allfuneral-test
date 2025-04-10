import { makeAutoObservable, runInAction } from 'mobx'
import { getContact, updateContact } from '@/entities/contact/api'
import { Contact, ContactData } from '@/entities/contact/model'

class ContactStore {
  contact: Contact | null = null
  loading = false
  error = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchContact(id: string) {
    runInAction(() => {
      this.loading = true
      this.error = ''
    })

    try {
      const data = await getContact(id)
      runInAction(() => {
        this.contact = data
      })
    } catch (e) {
      runInAction(() => {
        this.error = 'Ошибка при загрузке контакта'
      })
    } finally {
      runInAction(() => {
        this.loading = false
      })
    }
  }

  async updateContact(id: string, payload: ContactData) {
    try {
      const updated = await updateContact(id, payload)
      this.contact = updated
    } catch (e) {
      this.error = 'Ошибка при обновлении контакта'
    }
  }

  reset() {
    this.contact = null
    this.loading = false
    this.error = ''
  }

  get isLoaded() {
    return !!this.contact
  }
}

export const contactStore = new ContactStore()
