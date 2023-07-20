import Button from '@mui/material/Button';
import { useDelete } from '../../context/delete-context';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';
import { useEditProfile } from '../../context/edit-profile-context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Settings = ({id, anchorEl, setAnchorEl}) => {
    const{setIsDeleteModal, setItemToDelete} = useDelete()
    // const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
    const {editOpen, setEditOpen, setEditId, setIsEditProfileModal} = useEditProfile();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    console.log(editOpen , setEditOpen)
    const handleDelete = () => {
        setIsDeleteModal(true);
        setItemToDelete(id);
        console.log("delete")
        // setIsSettingOpen(false)
        setAnchorEl(null);
    }
    // const handleClose = () => {
    //     setIsSettingOpen(false)
    // }
    const handleEditProfile = () => {
        setEditId(id)
        // setIsEditProfileModal(true)
        setEditOpen(true)
        console.log("edit")
        setAnchorEl(null);
    }  
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(  
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
        <MenuItem onClick={handleDelete}>Delete Profile</MenuItem>
      </Menu>
    )
}

export default Settings


 /* <div className='d-flex d-column setting-box flex-start border-1 absolute top-0 right-0 bg-white'>
                <div className='d-flex'>
                    <Button variant="text" onClick={handleEditProfile}>Edit profile</Button>
                        <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>  
                </div>
                <Button variant="text" onClick={handleDelete}>Remove profile</Button>
            </div> */ 