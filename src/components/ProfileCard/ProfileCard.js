import * as React from 'react';
import {Card, CardHeader, CardContent, Avatar, IconButton, Typography} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerifiedIcon from '@mui/icons-material/Verified';
import Settings from '../Extras/Settings';

export default function ProfileCard({profile}) {
   const [anchorEl, setAnchorEl] = React.useState(null);
    const {id, first_name, last_name, email, is_verified, image_url, description} = profile

    const handleSettingClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

  return (
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
              {is_verified && <VerifiedIcon color='primary'/>}
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
