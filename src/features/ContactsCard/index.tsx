import Button from '@/shared/components/Button'
import './style.scss'

const ContactsCard = () => {
  return (
    <div className="contacts-card">
      <div className="contacts-card__header">
        <h3>Contacts</h3>
        <Button variant="flattened" startIcon="edit">
          Edit
        </Button>
      </div>
      <div className="contacts-card__info">
        <div className="contacts-card__info-item">
          <p className="contacts-card__info-label">Responsible person:</p>
          <p className="contacts-card__info-value">David Rosenberg</p>
        </div>
        <div className="contacts-card__info-item">
          <p className="contacts-card__info-label">Phone number:</p>
          <p className="contacts-card__info-value">+1 702 555 2345</p>
        </div>
        <div className="contacts-card__info-item">
          <p className="contacts-card__info-label">E-mail:</p>
          <p className="contacts-card__info-value">david_rosenberg88@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactsCard
