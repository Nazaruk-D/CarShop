import {useState} from 'react'

export const useModal = () => {
    ///packs
    const [editNameModal, setEditNameModal] = useState(false)
    const [editRegionModal, setEditRegionModal] = useState(false)
    const [editPhoneNumberModal, setEditPhoneNumberModal] = useState(false)
    const [editEmailModal, setEditEmailModal] = useState(false)
    const [editPasswordModal, setEditPasswordModal] = useState(false)
    const [deleteUserModal, setDeleteUserModal] = useState(false)


    function toggleEditNameModal() {
        setEditNameModal(!editNameModal)
    }
    function toggleEditAddressModal() {
        setEditRegionModal(!editRegionModal)
    }
    function togglePhoneNumberModal() {
        setEditPhoneNumberModal(!editPhoneNumberModal)
    }
    function toggleEmailModal() {
        setEditEmailModal(!editEmailModal)
    }
    function togglePasswordModal() {
        setEditPasswordModal(!editPasswordModal)
    }
    function toggleDeleteUserModal() {
        setDeleteUserModal(!deleteUserModal)
    }


    return {
        editNameModal,
        editAddressModal: editRegionModal,
        editPhoneNumberModal,
        editEmailModal,
        editPasswordModal,
        deleteUserModal,

        toggleEditNameModal,
        toggleEditAddressModal,
        togglePhoneNumberModal,
        toggleEmailModal,
        togglePasswordModal,
        toggleDeleteUserModal,
    }
}
