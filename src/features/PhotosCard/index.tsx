import Button from '@/shared/components/Button'
import './style.scss'

const PhotosCard = () => {
  return (
    <div className="photos-card">
      <div className="photos-card__header">
        <h3>Photos</h3>
        <Button variant="flattened" startIcon="edit">
          Add
        </Button>
      </div>
      <div className="contacts-card__info">
        <div className="contacts-card__info-item">
          <image />
        </div>
        <div className="contacts-card__info-item">
          <image />
        </div>
        <div className="contacts-card__info-item">
          <image />
        </div>
      </div>
    </div>
  )
}

export default PhotosCard
