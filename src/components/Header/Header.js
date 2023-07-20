import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewListIcon from '@mui/icons-material/ViewList';
import {debounce} from 'lodash';
import { useFilter } from '../../context/filter-context';



const Header = ({setIsCreateProfileModal, setView}) => {
    const {searchInput,dispatch} = useFilter()

    const handleSearchChange = debounce((e) =>
    dispatch({
      type: "search",
      payload: e.target.value
    }), 500)

    const handleCreateProfileModal = () => {
        setIsCreateProfileModal(true)
    }
    return(
        <>
            <div className='d-flex gap-m'>
                <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleSearchChange} className='search-input'/>
                <Button variant="contained" startIcon={<PersonAddIcon />} className='font-10' onClick={handleCreateProfileModal}>
                    Create Profile
                </Button>
                <div className='d-flex'>
                    <IconButton aria-label="view-column" onClick={() => setView("grid")}>
                        <ViewColumnIcon />
                    </IconButton>
                    <IconButton aria-label="view-list" onClick={() => setView("list")}>
                        <ViewListIcon />
                    </IconButton>
                </div>
            </div>
        </>
        
    )
}

export default Header;