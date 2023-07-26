import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Button, IconButton, Switch} from '@mui/material';
import { useFilter } from '../../context';

const Filter = () => {
    const { dispatch} = useFilter();

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

    const handleVerified = async (e) => {
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
            <div className='d-flex align-center'>
                <span className='pd-left-16'> Verified Talent </span> 
                <Switch onChange={handleVerified}/>
            </div>    
        </div>
    )
}

export default Filter