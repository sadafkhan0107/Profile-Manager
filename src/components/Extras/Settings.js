import { useDelete,useEditProfile } from '../../context';
import {Menu, MenuItem} from '@mui/material';

const Settings = ({id, anchorEl, setAnchorEl}) => {
  const{setIsDeleteModalOpen, setItemToDelete} = useDelete()
  const {setEditOpen, setEditId} = useEditProfile();
  const open = Boolean(anchorEl);

  const handleDelete = () => {
      setIsDeleteModalOpen(true);
      setItemToDelete(id);
      setAnchorEl(null);
  }
  
  const handleEditProfile = () => {
      setEditId(id)
      setEditOpen(true)
      setAnchorEl(null);
  }  

  const handleClose = () => {
    setAnchorEl(null);
  }
  
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
