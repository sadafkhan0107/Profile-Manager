import { FormLabel, FormControl, Box, Modal, IconButton, Button, Switch, TextField, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useProfile, useEditProfile } from '../../context';
import CloseIcon from '@mui/icons-material/Close';
import { updateProfile } from '../../services/updateProfile';

const EditProfile = () => {
    const {data, setData} = useProfile();
    const {editOpen, setEditOpen, editId} = useEditProfile()
    const profile = data?.find((profile) => profile.id === editId)
    const [updatedProfile, setUpdatedProfile] = useState(profile)
     const isMobileView = useMediaQuery("(max-width: 600px)");

    const handleClose = () => {
        setEditOpen(false)
    }

    const handleImg = (e) =>{
        setUpdatedProfile({...updatedProfile, image_url: e.target.value})
    }

    const handleFirstName = (e) => {
        setUpdatedProfile({...updatedProfile, first_name: e.target.value})
    }

    const handleLastName = (e) => {
        setUpdatedProfile({...updatedProfile, last_name: e.target.value})
    }

    const handleEmail = (e) => {
        setUpdatedProfile({...updatedProfile, email: e.target.value})
    }

    const handleVerify = (e) => {
        setUpdatedProfile({...updatedProfile, is_verified: e.target.checked})
    }

    const handleDescription = (e) => {
        setUpdatedProfile({...updatedProfile, description: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await updateProfile(updatedProfile.first_name, updatedProfile.last_name, updatedProfile.is_verified, updatedProfile.email, updatedProfile.description, updatedProfile.image_url, editId)
        // let newArr = data.map((profile) => profile.id === updatedProfile.id ? updatedProfile : profile)
        setData(data)
        setEditOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${isMobileView ? '100vw' : '70vw'}`,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
   
    return(
        <Modal
            open={editOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='d-flex d-column gap-m pd-32'>
                    <div className='mg-left-auto'>
                        <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon />
                        </IconButton>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>Image Link</FormLabel>
                                <TextField required name="image" value={updatedProfile?.image_url} sx={{ maxWidth: 800 }} variant="outlined" onChange={handleImg} />
                            </FormControl>
                        </div>
                        <div className='d-flex gap-m max-width'>
                            <div className='d-flex d-column gap-s width-48'>
                                <FormControl>
                                    <FormLabel>First name</FormLabel>
                                    <TextField required id="outlined-basic" value={updatedProfile?.first_name} variant="outlined" onChange={handleFirstName}/>
                                </FormControl>
                            </div>
                            <div className='d-flex d-column gap-s width-48'>
                                <FormControl>
                                    <FormLabel>Last name</FormLabel>
                                    <TextField required id="outlined-basic" value={updatedProfile?.last_name} variant="outlined" onChange={handleLastName}/>
                                </FormControl>
                            </div>
                        </div>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <TextField required id="outlined-basic" value={updatedProfile?.email} sx={{ maxWidth: 800 }} variant="outlined" onChange={handleEmail}/>
                            </FormControl>
                        </div>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <TextField required  id="outlined-basic" value={updatedProfile?.description} sx={{ maxWidth: 800 }} variant="outlined" onChange={handleDescription}/>
                            </FormControl>
                        </div>
                        <div className='border-1 br-4 d-flex space-between align-center mg-top-16' style={{ maxWidth: 800 }}>
                            <span className='pd-left-16'> { updatedProfile?.is_verified ? 'Talent is Verified' : 'Talent is not Verified'}</span> 
                            <Switch onChange={handleVerify} checked = {updatedProfile?.is_verified}/>
                        </div>
                        <div className='mg-top-16'>
                            <Button type='submit' variant="contained" sx={{maxWidth: 200}}> Edit Profile </Button>
                        </div>   
                    </form>
                </div>
            </Box>
        </Modal>
    )
}

export default EditProfile;