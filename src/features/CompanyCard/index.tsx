import Button from '@/shared/components/Button'
import './style.scss'

const CompanyCard = () => {
  return (
    <div className="company-card">
      <div className="company-card__header">
        <h3>Company Details</h3>
        <Button variant="flattened" startIcon="edit">
          Edit
        </Button>
      </div>
      <div className="company-card__info">
        <div className="company-card__info-item">
          <p className="company-card__info-label">Agreement:</p>
          <p className="company-card__info-value">1624/2-24 / 03.12.2024</p>
        </div>
        <div className="company-card__info-item">
          <p className="company-card__info-label">Business Entity:</p>
          <p className="company-card__info-value">Partnership</p>
        </div>
        <div className="company-card__info-item">
          <p className="company-card__info-label">Company type:</p>
          <p className="company-card__info-value">Funeral Home, Logistics Services</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
