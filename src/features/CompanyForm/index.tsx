import { useState } from 'react'
import { Company, CompanyData } from '@/entities/company/model'
import Input from '@/shared/components/Input'
import Select from '@/shared/components/Select'
import MultiSelect from '@/shared/components/MultiSelect'
import Button from '@/shared/components/Button'
import './style.scss'

interface CompanyFormProps {
  company: Company
  onCancel: () => void
  onSave: (data: CompanyData) => void
}

const CompanyForm = ({ company, onCancel, onSave }: CompanyFormProps) => {
  const [state, setState] = useState<CompanyData>({
    name: company.name ?? '',
    shortName: company.shortName ?? '',
    businessEntity: company.businessEntity ?? '',
    contract: {
      no: company.contract.no ?? '',
      issue_date: company.contract.issue_date?.slice(0, 10) ?? '', // для input[type="date"]
    },
    type: company.type ?? [],
  })

  const handleContractChange = (field: keyof CompanyData['contract'], value: string) => {
    setState(prev => ({
      ...prev,
      contract: {
        ...prev.contract,
        [field]: value,
      },
    }))
  }

  return (
    <div className="company-form">
      <div className="company-form__header">
        <h3>Company Details</h3>
        <div className="company-form__actions">
          <Button variant="flattened" startIcon="check" onClick={() => onSave(state)}>
            Save changes
          </Button>
          <Button variant="flattened" startIcon="close" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
      <div className="company-form__info">
        <div className="company-form__info-item">
          <p className="company-form__info-label">Agreement number:</p>
          <div className="company-form__row">
            <Input
              value={state.contract.no}
              onChange={e => handleContractChange('no', e.target.value)}
            />
            <p className="company-card__info-label">Date:</p>
            <Input
              value={state.contract.issue_date}
              onChange={e => handleContractChange('issue_date', e.target.value)}
            />
          </div>
        </div>
        <div className="company-form__info-item">
          <p className="company-form__info-label">Business entity:</p>
          <Select
            selected={state.businessEntity}
            options={['Sole Proprietorship', 'Partnership', 'Limited Liability Company']}
            onChange={value => setState(prev => ({ ...prev, businessEntity: value }))}
          />
        </div>
        <div className="company-form__info-item">
          <p className="company-form__info-label">Company type:</p>
          <MultiSelect
            selected={state.type}
            label="Select types"
            options={[
              { value: 'funeral_home', label: 'Funeral Home' },
              { value: 'logistics_services', label: 'Logistics services' },
              { value: 'burial_care_contractor', label: 'Burial care Contractor' },
            ]}
            onChange={values => setState(prev => ({ ...prev, type: values }))}
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyForm
