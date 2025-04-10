import {
  getCompany,
  updateCompany,
  deleteCompany,
  uploadImage,
  deleteImage,
} from '@/entities/company/api'
import { Company, CompanyData } from '@/entities/company/model'
import { makeAutoObservable, runInAction } from 'mobx'

class CompanyStore {
  company: Company | null = null
  loading = false
  error = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchCompany(id: string) {
    runInAction(() => {
      this.loading = true
      this.error = ''
    })

    try {
      const data = await getCompany(id)
      runInAction(() => {
        this.company = data
      })
    } catch (e) {
      runInAction(() => {
        this.error = 'Ошибка при загрузке компании'
      })
    } finally {
      runInAction(() => {
        this.loading = false
      })
    }
  }

  async updateCompany(id: string, data: CompanyData) {
    try {
      const updated = await updateCompany(id, data)
      this.company = updated
    } catch (e) {
      this.error = 'Ошибка при обновлении компании'
    }
  }

  async removeCompany(id: string) {
    try {
      await deleteCompany(id)
      this.reset()
    } catch (e) {
      this.error = 'Ошибка при удалении компании'
    }
  }

  async uploadPhoto(companyId: string, file: FormData) {
    try {
      const photo = await uploadImage(companyId, file)
      if (this.company) {
        this.company.photos.push(photo)
      }
    } catch (e) {
      this.error = 'Ошибка при загрузке изображения'
    }
  }

  async removePhoto(companyId: string, imageName: string) {
    try {
      await deleteImage(companyId, imageName)
      if (this.company) {
        this.company.photos = this.company.photos.filter(p => p.name !== imageName)
      }
    } catch (e) {
      this.error = 'Ошибка при удалении изображения'
    }
  }

  reset() {
    this.company = null
    this.loading = false
    this.error = ''
  }

  get isLoaded() {
    return !!this.company
  }
}

export const companyStore = new CompanyStore()
