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
   const [anchorEl, setAnchorEl] = React.useState(null);
    const [isSettingsOpen, setIsSettingOpen] = useState(false)
    const {id, first_name, last_name, email, is_verified, image_url, description} = profile
    // const handleSettingClick = (e) => {
    //     setIsSettingOpen(true)
    // }
    const handleSettingClick = (event) => {
      setAnchorEl(event.currentTarget);
      console.log(event.currentTarget)
    };

  return (
    // <div className='relative'>
    <>
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
        title= {
          <div className='d-flex align-center gap-s'>
            <Typography variant="subtitle2" component="span" sx={{ flexGrow: 1 }}>
              {first_name} {last_name}
            </Typography>
            <VerifiedIcon color='primary'/>
          </div>}
        subheader= {email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
     <Settings id={id} anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
    </>
    
  );
}
