import './App.css';
import CreateProfile from './components/Profile/CreateProfile';
import Header from './components/Header/Header';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import Delete from './components/Extras/Delete';
import EditProfile from './components/Profile/EditProfile';
import Filter from './components/Header/Filter';
import ProfileList from './components/ProfileList/ProfileList';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useState } from 'react';
import { useDelete, useEditProfile } from './context';
import { createTheme, ThemeProvider, CssBaseline, FormControlLabel, Switch } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: "light",
  }
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isCreateProfileModalOpen, setIsCreateProfileModalOpen] = useState(false);
  const {isDeleteModalOpen} = useDelete();
  const [view, setView] = useState('grid');
  const {editOpen} = useEditProfile();
  
  
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className='d-flex space-between pd-16 bt-shadow'>
        <h1>Profile Manager</h1>
        <div className='d-flex align-center'>
          <div className='mr-20'>
            <LightModeIcon />
          </div>
          <FormControlLabel 
              control={
                <Switch checked={darkMode} onChange={handleThemeChange} />
              }/>
          <ModeNightIcon />
        </div>
        
      </div>  
    <div className="App d-flex d-column gap-m">
      <Header isCreateProfileModalOpen={isCreateProfileModalOpen} setIsCreateProfileModalOpen={setIsCreateProfileModalOpen} setView={setView} />
      <Filter />
      {view === 'grid' ? <ProfileGrid /> : <ProfileList />}
      <CreateProfile isCreateProfileModalOpen={isCreateProfileModalOpen} setIsCreateProfileModalOpen={setIsCreateProfileModalOpen}/>
      {isDeleteModalOpen && <Delete />}
       {editOpen && <EditProfile />}
    </div>
    </ThemeProvider>
  );
}

export default App;
