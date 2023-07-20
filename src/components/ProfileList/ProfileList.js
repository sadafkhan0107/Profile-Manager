import * as React from "react";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useProfile } from "../../context/profile-context";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import Settings from "../Extras/Settings";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));


export default function ProfileList() {
    const {data} = useProfile();
    const [isSettingsOpen, setIsSettingOpen] = useState(false)
    const [Id, setId] = useState()
    const handleSettingClick = (id) => {
        setIsSettingOpen(true)
        setId(id)
        console.log("click")
    }

  return (
    <div className="d-flex gap-m">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left"><SettingsIcon /> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <>
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ width: 300 }}>
                <ListItem
                    secondaryAction={
                        <IconButton aria-label="Verified Icon">
                        <VerifiedIcon color="primary"/>
                        </IconButton>
                    }
                    >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={row.image_url} />
                    </ListItemAvatar>
                    <ListItemText
                        primary= {(row.first_name + " " + row.last_name).length > 12 ? (row.first_name + " " + row.last_name).substring(0, 12)+"..." : (row.first_name + " " + row.last_name)}
                    />
                </ListItem>
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left"><IconButton aria-label="expand row" 
              onClick= {() => handleSettingClick(row.id)}><MoreVertIcon /> 
              </IconButton>
              </TableCell>
            </TableRow>  
            </>
          ))}
        </TableBody>
      </Table>
      {isSettingsOpen && <Settings id={Id} setIsSettingOpen={setIsSettingOpen}/>}
    </TableContainer>
    </div>
    
  );
}

// {`${item.first_name} ${item.last_name}`}

// {(item.first_name + " " + item.last_name).length > 12 ? (item.first_name + " " + item.last_name).substring(0, 12)+"..." : (item.first_name + " " + item.last_name)}