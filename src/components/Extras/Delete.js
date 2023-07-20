import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useDelete } from '../../context/delete-context';
import { useProfile } from '../../context/profile-context';


const Delete = () => {
    const {isDeleteModal, setIsDeleteModal, itemToDelete} = useDelete()
    const {data, setData} = useProfile();
    const handleCancelClick = () => {
        setIsDeleteModal(false)
    }
    const handleDelete = () => {
        const updatedArr = data.filter((profile) => profile.id !== itemToDelete)
        setData(updatedArr);
        setIsDeleteModal(false)
    }
    return(
        <div className='fixed top-0 left-0 d-flex align-center justify-center w-100 h-100 bg-modal z-99'>
            <div className='delete-box border-1 pd-32'>
                <div className='d-flex space-between border-btm-1 align-center'>
                    <span>Remove Profile</span>
                    <IconButton aria-label="delete">
                        <CloseIcon />
                    </IconButton>
                </div>
                <p className='border-btm-1'>Removed file will be deleted premenantly and won't be available anymore.</p>
                <div className='d-flex gap-m'>
                    <Button variant="contained" onClick={handleCancelClick}>Cancel</Button>
                    <Button variant="contained" onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>

    )
}

export default Delete