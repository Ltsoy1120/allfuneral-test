import { Company, CompanyData, Photo } from './model'
import { http } from '@/api/http'

export const getCompany = async (id: string): Promise<Company> => {
  const response = await http.get(`/companies/${id}`)
  return response.data
}

export const updateCompany = async (id: string, payload: CompanyData): Promise<Company> => {
  const response = await http.patch(`/companies/${id}`, payload)
  return response.data
}

export const deleteCompany = async (id: string): Promise<string> => {
  const response = await http.delete(`/companies/${id}`)
  return response.data
}

export const uploadImage = async (companyId: string, file: FormData): Promise<Photo> => {
  const response = await http.post(`/companies/${companyId}/image`, file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export const deleteImage = async (companyId: string, imageName: string): Promise<string> => {
  const response = await http.delete(`/companies/${companyId}/image/${imageName}`)
  return response.data
}
