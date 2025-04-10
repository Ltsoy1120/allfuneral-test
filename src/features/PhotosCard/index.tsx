import { useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Company } from '@/entities/company/model'
import Button from '@/shared/components/Button'
import Modal from '@/shared/components/Modal'
import { companyStore } from '@/stores/companyStore'
import './style.scss'

interface PhotosCardProps {
  company: Company
}

const PhotosCard = observer(({ company }: PhotosCardProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [photoName, setPhotoName] = useState('')

  const handleAddPhoto = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      companyStore.uploadPhoto(company.id, formData)
    }
  }

  const handleRemoveModalOpen = async (photoName: string) => {
    setPhotoName(photoName)
    setIsDeleteModalOpen(true)
  }

  const handleRemove = async () => {
    await companyStore.removePhoto(company.id, photoName)
    setIsDeleteModalOpen(false)
  }

  return (
    <>
      <div className="photos-card">
        <div className="photos-card__header">
          <h3 className="photos-card__title">Photos</h3>
          <Button variant="flattened" startIcon="add-photo" onClick={handleAddPhoto}>
            Add
          </Button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        <div className="photos-card__list">
          {company.photos.map(photo => (
            <div key={photo.name} className="photos-card__item">
              <img src={photo.thumbpath} alt="preview" />
              <Button startIcon="trash" onClick={() => handleRemoveModalOpen(photo.name)} />
            </div>
          ))}
        </div>
      </div>
      {isDeleteModalOpen && (
        <Modal
          title="Remove this Photo?"
          description="Are you sure you want to remove this Photo?"
          confirmText="Yes, remove"
          cancelText="No"
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleRemove}
        />
      )}
    </>
  )
})

export default PhotosCard
