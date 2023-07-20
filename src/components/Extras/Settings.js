import Button from '@mui/material/Button';
import { useDelete } from '../../context/delete-context';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';
import { useEditProfile } from '../../context/edit-profile-context';

const Settings = ({id, setIsSettingOpen}) => {
    const{setIsDeleteModal, setItemToDelete} = useDelete()
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
    const {setEditId, setIsEditProfileModal} = useEditProfile();
    const handleDelete = () => {
        setIsDeleteModal(true);
        setItemToDelete(id);
        setIsSettingOpen(false)
    }
    const handleClose = () => {
        setIsSettingOpen(false)
    }
    const handleEditProfile = () => {
        setEditId(id)
        setIsEditProfileModal(true)
        setIsSettingOpen(false)
    }
    return(
        <>
            <div className='d-flex d-column setting-box flex-start border-1 absolute top-0 right-0 bg-white'>
                <div className='d-flex'>
                    <Button variant="text" onClick={handleEditProfile}>Edit profile</Button>
                        <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>  
                </div>
                <Button variant="text" onClick={handleDelete}>Remove profile</Button>
            </div>
        </>
    )
}

export default Settings