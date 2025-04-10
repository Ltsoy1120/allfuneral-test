import { Contact, ContactData } from './model'
import { http } from '@/api/http'

export const getContact = async (id: string): Promise<Contact> => {
  const response = await http.get(`/contacts/${id}`)
  return response.data
}

export const updateContact = async (id: string, payload: ContactData): Promise<Contact> => {
  const response = await http.patch(`/contacts/${id}`, payload)
  return response.data
}
