import { useProfile } from '../../context/profile-context';
import ProfileCard from '../ProfileCard/ProfileCard';
import Grid from '@mui/material/Unstable_Grid2';
import { useFilter } from '../../context/filter-context';

const ProfileGrid = () => {
    const {data} = useProfile();
    const {sort,is_verified,searchInput} = useFilter();
    const getProfileBySearch = (profiles, searchInput) =>{
        const filteredArray = searchInput ? profiles.filter((data) => ((data.first_name + data.last_name).toLowerCase().includes(searchInput.toLowerCase()))) : data
        return filteredArray
      }
      const searchedItems = getProfileBySearch(data, searchInput)

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


    return(
        <>
            <Grid container spacing={2}>
            {verifiedProfiles?.map((profile, index) => (
                <Grid xs={3} key={index}>
                <ProfileCard profile = {profile} key = {profile.id}/>
                </Grid>
            ))}
            </Grid>
        </>
        
    )
}

export default ProfileGrid;