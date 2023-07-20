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

const CreateProfile = ({setIsCreateProfileModal}) => {
    const [newProfile, setNewProfile] = useState({image_url:'', first_name:'', last_name:'', email:'',is_verified: false, description:''})
    const {data, setData} = useProfile();
    const handleClose = () => {
        setIsCreateProfileModal(false)
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
    const handleSubmit = (e) => {
        e.preventDefault();
        let newArr = [...data, {...newProfile, id:uuid()}]
        setData(newArr)
        setNewProfile({image_url:'', first_name:'', last_name:'', email:'',is_verified: false, description:''})
        setIsCreateProfileModal(false)
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
                            <TextField required name="image" value={newProfile.image_url} sx={{ maxWidth: 800 }} placeholder="Image Link" variant="outlined" onChange={handleImg} />
                        </FormControl>
                    </div>
                    <div className='d-flex gap-m'>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <TextField required value={newProfile.first_name} id="outlined-basic" sx={{ maxWidth: 392 }} label="First Name" variant="outlined" onChange={handleFirstName}/>
                            </FormControl>
                        </div>
                        <div className='d-flex d-column gap-s'>
                            <FormControl>
                                <FormLabel>Last name</FormLabel>
                                <TextField required value={newProfile.last_name} id="outlined-basic" sx={{ maxWidth: 392 }} label="Last Name" variant="outlined" onChange={handleLastName}/>
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
        </div>
    )
}

export default CreateProfile;