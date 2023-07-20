import { useDelete,useProfile } from '../../context';
import {Modal, Box, Button} from '@mui/material';

const Delete = () => {
    const {isDeleteModalOpen, setIsDeleteModalOpen, itemToDelete} = useDelete()
    const {data, setData} = useProfile();

    const handleCancelClick = () => {
        setIsDeleteModalOpen(false)
    }

    const handleDelete = () => {
        const updatedArr = data.filter((profile) => profile.id !== itemToDelete)
        setData(updatedArr);
        setIsDeleteModalOpen(false)
    }

    const handleClose = () => {
        setIsDeleteModalOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return(
        <Modal
            open={isDeleteModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='d-flex space-between border-btm-1 align-center'>
                    <span>Remove Profile</span>
                </div>
                <p>Removed file will be deleted premenantly and won't be available anymore.</p>
                <div className='d-flex gap-m justify-center mg-top-32'>
                    <Button variant="contained" onClick={handleCancelClick}>Cancel</Button>
                    <Button variant="contained" onClick={handleDelete}>Delete</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default Delete