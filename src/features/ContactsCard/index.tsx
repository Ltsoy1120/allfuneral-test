import { observer } from 'mobx-react-lite'
import { formatPhone } from '@/shared/utils/format'
import Button from '@/shared/components/Button'
import Loader from '@/shared/components/Loader'
import { contactStore } from '@/stores/contactStore'
import './style.scss'

interface ContactsCardProps {
  onEdit: () => void
}

const ContactsCard = observer(({ onEdit }: ContactsCardProps) => {
  const { contact, loading, isLoaded } = contactStore

  return (
    <div className="contacts-card">
      {loading && <Loader />}
      {!loading && !isLoaded && <p>Contact not found</p>}

      {isLoaded && contact && (
        <>
          <div className="contacts-card__header">
            <h3>Contacts</h3>
            <Button variant="flattened" startIcon="edit" onClick={onEdit}>
              Edit
            </Button>
          </div>

          <div className="contacts-card__info">
            <div className="contacts-card__info-item">
              <p className="contacts-card__info-label">Responsible person:</p>
              <p className="contacts-card__info-value">{`${contact?.firstname} ${contact?.lastname}`}</p>
            </div>
            <div className="contacts-card__info-item">
              <p className="contacts-card__info-label">Phone number:</p>
              <p className="contacts-card__info-value">
                {contact?.phone && formatPhone(contact?.phone)}
              </p>
            </div>
            <div className="contacts-card__info-item">
              <p className="contacts-card__info-label">E-mail:</p>
              <p className="contacts-card__info-value">{contact?.email}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
})

export default ContactsCard
