import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerifiedIcon from '@mui/icons-material/Verified';
import Settings from '../Extras/Settings';
import { useEditProfile } from '../../context/edit-profile-context';


export default function ProfileCard({profile}) {
    const [isSettingsOpen, setIsSettingOpen] = useState(false)
    const {id, first_name, last_name, email, is_verified, image_url, description} = profile
    const handleSettingClick = (e) => {
        setIsSettingOpen(true)
    }

  return (
    <div className='relative'>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="image" alt={first_name} src= {image_url} />
        }
        action={
          <IconButton aria-label="settings" onClick={handleSettingClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title= {first_name + " " + last_name + <VerifiedIcon color='#3b82f6'/> } 
        subheader= {email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
     {isSettingsOpen && <Settings id={id} setIsSettingOpen={setIsSettingOpen}/>}
    </div>
    
  );
}
