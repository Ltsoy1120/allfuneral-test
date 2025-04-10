import Button from '@/shared/components/Button'
import { Company } from '@/entities/company/model'
import { formatCompanyTypes, formatDate } from '@/shared/utils/format'
import './style.scss'

interface CompanyCardProps {
  company: Company
  onEdit: () => void
}

const CompanyCard = ({ company, onEdit }: CompanyCardProps) => {
  return (
    <div className="company-card">
      <div className="company-card__header">
        <h3>Company Details</h3>
        <Button variant="flattened" startIcon="edit" onClick={onEdit}>
          Edit
        </Button>
      </div>
      <div className="company-card__info">
        <div className="company-card__info-item">
          <p className="company-card__info-label">Agreement:</p>
          <p className="company-card__info-value">
            {company.contract.no} / {formatDate(company.contract.issue_date)}
          </p>
        </div>
        <div className="company-card__info-item">
          <p className="company-card__info-label">Business entity:</p>
          <p className="company-card__info-value">{company.businessEntity}</p>
        </div>
        <div className="company-card__info-item">
          <p className="company-card__info-label">Company type:</p>
          <p className="company-card__info-value">{formatCompanyTypes(company.type)}</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
