import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useProfile } from '../../context/profile-context';
import FormControl from '@mui/material/FormControl';
import { v4 as uuid} from 'uuid';
import { FormLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useEditProfile } from '../../context/edit-profile-context';

const EditProfile = ({setIsEditProfileModal}) => {
    const {data, setData} = useProfile();
    const {editId, setEditId} = useEditProfile()
    const profile = data.find((profile) => profile.id === editId)
    const [updatedProfile, setUpdatedProfile] = useState(profile)
    console.log(profile)

    const handleClose = () => {
        setIsEditProfileModal(false)
    }
    const handleImg = (e) =>{
        setUpdatedProfile({...profile, image_url: e.target.value})
        // setUpdatedProfile({...data, image_url: e.target.value})
    }
    const handleFirstName = (e) => {
        setUpdatedProfile({...profile, first_name: e.target.value})
    }
    const handleLastName = (e) => {
        setUpdatedProfile({...profile, last_name: e.target.value})
    }
    const handleEmail = (e) => {
        setUpdatedProfile({...profile, email: e.target.value})
    }
    const handleVerify = (e) => {
        setUpdatedProfile({...profile, is_verified: e.target.checked})
    }
    const handleDescription = (e) => {
        setUpdatedProfile({...profile, description: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newArr = data.map((profile) => profile.id === updatedProfile.id ? updatedProfile : profile)
        setData(newArr)
        setIsEditProfileModal(false)
    }
   
    return(
        <div className='fixed top-0 left-0 d-flex align-center justify-center w-100 h-100 bg-modal z-99'>
            <div className='d-flex d-column gap-m bg-white pd-32'>
                 <div className='mg-left-auto'>
                    <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                   </IconButton>
                 </div>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex d-column gap-s'>
                        <FormControl>
                            <FormLabel>Image Link</FormLabel>
                            <TextField required name="image" value={updatedProfile.image_url} sx={{ maxWidth: 800 }} variant="outlined" onChange={handleImg} />
                        </FormControl>
                    </div>
                    <div className='d-flex gap-m'>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <TextField required id="outlined-basic" value={updatedProfile.first_name} sx={{ maxWidth: 392 }} variant="outlined" onChange={handleFirstName}/>
                            </FormControl>
                        </div>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>Last name</FormLabel>
                                <TextField required id="outlined-basic" value={updatedProfile.last_name} sx={{ maxWidth: 392 }} variant="outlined" onChange={handleLastName}/>
                            </FormControl>
                        </div>
                    </div>
                    <div className='d-flex d-column gap-s'>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <TextField required id="outlined-basic" value={updatedProfile.email} sx={{ maxWidth: 800 }} variant="outlined" onChange={handleEmail}/>
                        </FormControl>
                    </div>
                    <div className='d-flex d-column gap-s'>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <TextField required  id="outlined-basic" value={updatedProfile.description} sx={{ maxWidth: 800 }} variant="outlined" onChange={handleDescription}/>
                        </FormControl>
                    </div>
                    <div className='border-1 br-4 d-flex space-between align-center mg-top-16' style={{ maxWidth: 800 }}>
                        <span className='pd-left-16'> { updatedProfile.is_verified ? 'Talent is Verified' : 'Talent is not Verified'}</span> 
                        <Switch onChange={handleVerify} checked = {updatedProfile.is_verified}/>
                    </div>
                    <div className='mg-top-16'>
                    <Button type='submit' variant="contained" sx={{maxWidth: 200}}> Edit Profile </Button>
                    </div>   
                </form>
            </div>
        </div>
    )
}

export default EditProfile;