import * as React from "react";
import {ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination} from "@mui/material";
import { useProfile, useFilter } from "../../context";
import { useState } from "react";
import Settings from "../Extras/Settings";
import VerifiedIcon from "@mui/icons-material/Verified";
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function ProfileList() {
    const {data} = useProfile();
    const {sort,is_verified,searchInput} = useFilter();
    const [Id, setId] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data?.length / 5);

    const handlePageChange = (event, page) => {
      setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    const productsToShow = data?.slice(startIndex, endIndex);

    const handleSettingClick = (event, id) => {
        setAnchorEl(event.currentTarget);
        setId(id)
        console.log("click")
        console.log(event.currentTarget)
    }
    const getProfileBySearch = (profiles, searchInput) =>{
      const filteredArray = searchInput ? profiles.filter((data) => ((data.first_name + data.last_name).toLowerCase().includes(searchInput.toLowerCase()))) : profiles
      return filteredArray
    }
    const searchedItems = getProfileBySearch(productsToShow, searchInput)

    const getProfileBySort = (data, sort) =>{
      let filteredArray;
      if(sort==="inc")
      {
         filteredArray = [...data].sort((a, b) => (a.email).toLowerCase() > (b.email).toLowerCase() ? 1 : -1 )
      }
      else if(sort === "dec")
      {
         filteredArray = [...data].sort((a, b) => (a.email).toLowerCase() < (b.email).toLowerCase() ? 1 : -1 )
      }
      else{
          return data
      }
      return filteredArray;
    }
    const filteredBySort = getProfileBySort(searchedItems, sort);


    const getVerifiedProfiles = (data, is_verified) => {
      const updatedArr = is_verified ? data.filter((profile) => profile.is_verified) : data
      return updatedArr
    }

    const verifiedProfiles = getVerifiedProfiles(filteredBySort, is_verified)

  return (
    <div>
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
          {verifiedProfiles?.map((row) => (
            <>
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ width: 300 }}>
                <ListItem
                    secondaryAction={ 
                        <IconButton aria-label="Verified Icon">
                        {row.is_verified && <VerifiedIcon color="primary"/>}
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
              onClick= {(event) => handleSettingClick(event, row.id)}><MoreVertIcon /> 
              </IconButton>
              </TableCell>
            </TableRow>  
            </>
          ))}
        </TableBody>
      </Table>
      <Settings id={Id} anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
    </TableContainer>
    <div className='d-flex justify-end'>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size='small'
            />
          </div>
    </div>
    
  );
}
