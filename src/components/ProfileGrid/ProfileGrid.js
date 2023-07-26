import { useProfile, useFilter } from '../../context';
import ProfileCard from '../ProfileCard/ProfileCard';
import Grid from '@mui/material/Unstable_Grid2';
import { Pagination } from '@mui/material';
import { useState } from 'react';

const ProfileGrid = () => {
    const {data} = useProfile();
    const {sort,is_verified} = useFilter();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data?.length / 10);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const productsToShow = data?.slice(startIndex, endIndex);


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
      const filteredBySort = getProfileBySort(productsToShow, sort);


      const getVerifiedProfiles = (data, is_verified) => {
        const updatedArr = is_verified ? data.filter((profile) => profile.is_verified) : data
        return updatedArr
      }

      const verifiedProfiles = getVerifiedProfiles(filteredBySort, is_verified)


    return(
        <main className= 'pl-48'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {verifiedProfiles?.map((profile, index) => (
                <Grid xs={3} key={index}>
                <ProfileCard profile = {profile} key = {profile.id}/>
                </Grid>
            ))}
            </Grid>
            <div className='d-flex justify-end mg-top-16'>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size='small'
            />
          </div>
        </main>
        
    )
}

export default ProfileGrid;