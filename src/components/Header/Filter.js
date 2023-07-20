import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useProfile } from '../../context/profile-context';
import { useFilter } from '../../context/filter-context';
import Switch from '@mui/material/Switch';

const Filter = () => {
    const {data} = useProfile();
    const {is_verified, dispatch} = useFilter();

    const handleIncSort = () => {
        dispatch({
            type: 'sort',
            payload: "inc"  
        })
    }
    const handleDecSort = () => {
        dispatch({
            type: 'sort',
            payload: "dec"     
        })
    }
    const handleVerified = (e) => {
        dispatch({
            type: "verify",
            payload: e.target.checked
        })
    }

    return (
        <div className='d-flex gap-m'>
                <div className='border-1 br-4'>
                    <IconButton aria-label="arrow-upward" onClick={handleIncSort}>
                        <ArrowUpwardIcon />
                    </IconButton>
                    <Button variant="contained"> email </Button>
                    <IconButton aria-label="arrow-downward" onClick={handleDecSort}>
                        <ArrowDownwardIcon />
                    </IconButton>
                </div>
                <span className='pd-left-16'> {is_verified ? 'Talent is Verified' : 'Talent is not Verified'} </span> 
                        <Switch onChange={handleVerified}/>
            </div>
    )
}

export default Filter