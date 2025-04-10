import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import CompanyCard from '@/features/CompanyCard'
import ContactsCard from '@/features/ContactsCard'
import PhotosCard from '@/features/PhotosCard'
import Button from '@/shared/components/Button'
import Modal from '@/shared/components/Modal'
import Input from '@/shared/components/Input'
import Loader from '@/shared/components/Loader'
import { companyStore } from '@/stores/companyStore'
import { contactStore } from '@/stores/contactStore'
import CompanyForm from '@/features/CompanyForm'
import ContactsForm from '@/features/ContactsForm'
import { CompanyData } from '@/entities/company/model'
import { ContactData } from '@/entities/contact/model'
import './style.scss'

const CompanyPage = observer(() => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditingCompany, setIsEditingCompany] = useState(false)
  const [isEditingContact, setIsEditingContact] = useState(false)
  const { company, loading, isLoaded } = companyStore
  const { contact } = contactStore
  const [name, setName] = useState(company?.name ?? '')

  useEffect(() => {
    companyStore.fetchCompany('12')
  }, [])

  useEffect(() => {
    company?.contactId && contactStore.fetchContact(company?.contactId)
  }, [company])

  const handleModalCancel = () => {
    setIsEditModalOpen(false)
  }

  const handleOrganizationRemove = async () => {
    if (!company) return
    await companyStore.removeCompany(company.id)
    setIsDeleteModalOpen(false)
  }

  const handleOrganizationNameEdit = async () => {
    if (!company) return
    if (!name.trim()) return

    const updatedData = {
      name,
      shortName: company.shortName,
      businessEntity: company.businessEntity,
      contract: {
        no: company.contract.no,
        issue_date: company.contract.issue_date,
      },
      type: company.type,
    }

    await companyStore.updateCompany(company.id, updatedData)
    setIsEditModalOpen(false)
  }

  const handleCompanyEdit = async (data: CompanyData) => {
    if (!company) return
    await companyStore.updateCompany(company.id, data)
    setIsEditingCompany(false)
  }

  const handleContactsEdit = async (data: ContactData) => {
    if (!contact) return
    await contactStore.updateContact(contact.id, data)
    setIsEditingContact(false)
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && !isLoaded && <p>Company not found</p>}

      {isLoaded && company && (
        <div className="company-page">
          <div className="company-page__content">
            <div className="company-page__title">
              <h1>{company?.name}</h1>
              <div className="company-page__title-actions">
                <Button
                  variant="icon"
                  iconSize={20}
                  startIcon="edit"
                  onClick={() => setIsEditModalOpen(true)}
                />
                <Button
                  variant="icon"
                  iconSize={20}
                  startIcon="trash"
                  onClick={() => setIsDeleteModalOpen(true)}
                />
              </div>
            </div>
            <div className="company-page__info">
              {isEditingCompany ? (
                <CompanyForm
                  company={company}
                  onCancel={() => setIsEditingCompany(false)}
                  onSave={handleCompanyEdit}
                />
              ) : (
                <CompanyCard company={company} onEdit={() => setIsEditingCompany(true)} />
              )}
              {isEditingContact && contact ? (
                <ContactsForm
                  contact={contact}
                  onCancel={() => setIsEditingContact(false)}
                  onSave={handleContactsEdit}
                />
              ) : (
                <ContactsCard onEdit={() => setIsEditingContact(true)} />
              )}

              <PhotosCard company={company} />
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <Modal
          title="Specify the Organization's name"
          confirmText="Save changes"
          cancelText="Cancel"
          onClose={() => setIsEditModalOpen(false)}
          onCancel={handleModalCancel}
          onConfirm={handleOrganizationNameEdit}
        >
          <Input value={name} onChange={e => setName(e.target.value)} />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal
          title="Remove the Organization?"
          description="Are you sure you want to remove this Organozation?"
          confirmText="Yes, remove"
          cancelText="No"
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleOrganizationRemove}
        />
      )}
    </>
  )
})

export default CompanyPage
