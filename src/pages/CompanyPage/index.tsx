import CompanyCard from '@/features/CompanyCard'
import ContactsCard from '@/features/ContactsCard'
import PhotosCard from '@/features/PhotosCard'
import Button from '@/shared/components/Button'
import './style.scss'

const CompanyPage = () => {
  return (
    <div className="company-page">
      <div className="company-page__content">
        <div className="company-page__title">
          <h1>Eternal Rest Funeral Home</h1>
          <div className="company-page__title-actions">
            <Button variant="icon" iconSize={20} startIcon="edit" />
            <Button variant="icon" iconSize={20} startIcon="trash" />
          </div>
        </div>
        <div className="company-page__info">
          <CompanyCard />
          <ContactsCard />
          <PhotosCard />
        </div>
      </div>
    </div>
  )
}

export default CompanyPage
