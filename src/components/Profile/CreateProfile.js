import { FormLabel, FormControl, Box, Modal, IconButton, Button, Switch, TextField,useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useProfile } from '../../context';
import CloseIcon from '@mui/icons-material/Close';
import { createProfile } from '../../services/createProfile';

const CreateProfile = ({isCreateProfileModalOpen,setIsCreateProfileModalOpen}) => {
    const [newProfile, setNewProfile] = useState({image_url:'', first_name:'', last_name:'', email:'',is_verified: false, description:''})
    const {data, setData} = useProfile();
    const isMobileView = useMediaQuery("(max-width: 600px)");
    
    const handleClose = () => {
        setIsCreateProfileModalOpen(false)
    }

    const handleImg = (e) =>{
        setNewProfile({...newProfile, image_url: e.target.value})
    }

    const handleFirstName = (e) => {
        setNewProfile({...newProfile, first_name: e.target.value})
    }

    const handleLastName = (e) => {
        setNewProfile({...newProfile, last_name: e.target.value})
    }

    const handleEmail = (e) => {
        setNewProfile({...newProfile, email: e.target.value})
    }

    const handleVerify = (e) => {
        setNewProfile({...newProfile, is_verified: e.target.checked})
    }

    const handleDescription = (e) => {
        setNewProfile({...newProfile, description: e.target.value})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const profile = await createProfile(newProfile.first_name, newProfile.last_name, newProfile.is_verified, newProfile.email, newProfile.description, newProfile.image_url)
        setData([...data, profile])
        setNewProfile({image_url:'', first_name:'', last_name:'', email:'',is_verified: false, description:''})
        setIsCreateProfileModalOpen(false)
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
            open={isCreateProfileModalOpen}
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
                                <TextField required name="image" value={newProfile.image_url} sx={{ maxWidth: 800 }} placeholder="Image Link" variant="outlined" onChange={handleImg} />
                            </FormControl>
                        </div>
                        <div className='d-flex gap-m max-width'>
                            <div className='d-flex d-column gap-s width-48'>
                                <FormControl>
                                    <FormLabel>First name</FormLabel>
                                    <TextField required value={newProfile.first_name} id="outlined-basic" label="First Name" variant="outlined" onChange={handleFirstName}/>
                                </FormControl>
                            </div>
                            <div className='d-flex d-column gap-s width-48'>
                                <FormControl>
                                    <FormLabel>Last name</FormLabel>
                                    <TextField required value={newProfile.last_name} id="outlined-basic" label="Last Name" variant="outlined" onChange={handleLastName}/>
                                </FormControl>
                            </div>
                        </div>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <TextField required value={newProfile.email} id="outlined-basic" sx={{ maxWidth: 800 }} label="Email" variant="outlined" onChange={handleEmail}/>
                            </FormControl>
                        </div>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <TextField required value={newProfile.description} id="outlined-basic" sx={{ maxWidth: 800 }} label="Description" variant="outlined" onChange={handleDescription}/>
                            </FormControl>
                        </div>
                        <div className='border-1 br-4 d-flex space-between align-center mg-top-16' style={{ maxWidth: 800 }}>
                            <span className='pd-left-16'> {newProfile.is_verified ? 'Talent is Verified' : 'Talent is not Verified'} </span> 
                            <Switch onChange={handleVerify}/>
                        </div>
                        <div className='mg-top-16'>
                            <Button type='submit' variant="contained" sx={{maxWidth: 200}}> Create Profile </Button>
                        </div>   
                    </form>
                </div>
            </Box>
        </Modal>
    )
}

export default CreateProfile;