import Button from '../Button'
import './style.scss'

interface ModalProps {
  title: string
  description?: string
  children?: React.ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  children,
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  onClose,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>

        {description && <p className="modal__description">{description}</p>}
        {children && <div className="modal__content">{children}</div>}

        <div className="modal__actions">
          <Button variant="outline" onClick={onCancel ?? onClose}>
            {cancelText}
          </Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
