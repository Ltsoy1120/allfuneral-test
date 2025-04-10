import { useState } from 'react'
import { Contact, ContactData } from '@/entities/contact/model'
import Input from '@/shared/components/Input'
import Button from '@/shared/components/Button'
import { formatPhone } from '@/shared/utils/format'
import { validateEmail, validatePhoneNumber } from '@/shared/utils/validate'
import './style.scss'

interface ContactsFormProps {
  contact: Contact
  onCancel: () => void
  onSave: (data: ContactData) => void
}

const ContactsForm = ({ contact, onCancel, onSave }: ContactsFormProps) => {
  const [state, setState] = useState<ContactData>({
    firstname: contact.firstname ?? '',
    lastname: contact.lastname ?? '',
    phone: contact.phone ?? '',
    email: contact.email ?? '',
  })

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
  })

  const [fullName, setFullName] = useState(
    `${contact.firstname ?? ''} ${contact.lastname ?? ''}`.trim(),
  )

  const handleFullNameBlur = () => {
    const words = fullName.trim().split(/\s+/)
    if (words.length < 2) {
      setErrors(prev => ({ ...prev, fullname: 'Please enter both first and last name' }))
      return
    }

    const [firstname, ...rest] = words
    const lastname = rest.join(' ')
    setState(prev => ({
      ...prev,
      firstname,
      lastname,
    }))
    setErrors(prev => ({ ...prev, fullname: '' }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawPhone = e.target.value.replace(/\D/g, '')
    const phoneNumberError = validatePhoneNumber(e.target.value)
    setErrors(prev => ({ ...prev, phoneNumber: phoneNumberError }))
    setState(prev => ({
      ...prev,
      phone: rawPhone,
    }))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailError = validateEmail(e.target.value)
    setErrors(prev => ({ ...prev, email: emailError }))
    setState(prev => ({
      ...prev,
      email: e.target.value,
    }))
  }

  const isDisabled =
    Object.values(errors).some(error => error) || Object.values(state).some(value => !value)

  return (
    <div className="contact-form">
      <div className="contact-form__header">
        <h3>Company Details</h3>
        <div className="contact-form__actions">
          <Button
            variant="flattened"
            startIcon="check"
            onClick={() => onSave(state)}
            disabled={isDisabled}
          >
            Save changes
          </Button>
          <Button variant="flattened" startIcon="close" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>

      <div className="contact-form__info">
        <div className="contact-form__info-item">
          <p className="contact-form__info-label">Responsible person:</p>
          <Input
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            onBlur={handleFullNameBlur}
            error={errors.fullname}
          />
        </div>

        <div className="contact-form__info-item">
          <p className="contact-form__info-label">Phone number:</p>
          <Input
            type="tel"
            value={formatPhone(state.phone)}
            onChange={handlePhoneChange}
            error={errors.phoneNumber}
          />
        </div>

        <div className="contact-form__info-item">
          <p className="contact-form__info-label">E-mail:</p>
          <Input value={state.email} onChange={handleEmailChange} error={errors.email} />
        </div>
      </div>
    </div>
  )
}

export default ContactsForm
