import {TextField, Button, IconButton, useMediaQuery} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewListIcon from '@mui/icons-material/ViewList';
import {debounce} from 'lodash';
import { useFilter } from '../../context';

const Header = ({setIsCreateProfileModalOpen, setView}) => {
    const {dispatch} = useFilter()
    const isMobileView = useMediaQuery("(max-width: 600px)");

    const handleSearchChange = debounce((e) =>
    dispatch({
      type: "search",
      payload: e.target.value
    }), 500)

    const handleCreateProfileModal = () => {
        setIsCreateProfileModalOpen(true)
        console.log("click")
    }
    return(
        <>
            <div className= {`${!isMobileView ? 'd-flex gap-m' : ''} `}>
                <TextField id="outlined-basic" placeholder="Search" variant="outlined" onChange={handleSearchChange} className='search-input'/>
                <div className= {`${isMobileView ? 'mg-top-16' : ''}`}>
                    <Button variant="contained" startIcon={<PersonAddIcon />}  onClick={handleCreateProfileModal}>
                    Create Profile
                </Button>
                </div>
                
                <div className='d-flex'>
                    {!isMobileView && 
                    <>
                        <IconButton aria-label="view-column" onClick={() => setView("grid")}>
                            <ViewColumnIcon />
                        </IconButton>
                        <IconButton aria-label="view-list" onClick={() => setView("list")}>
                            <ViewListIcon />
                        </IconButton>
                    </>  
                    }
                </div>
            </div>
        </>    
    )
}

export default Header;