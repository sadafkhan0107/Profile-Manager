import './App.css';
import CreateProfile from './components/Profile/CreateProfile';
import Header from './components/Header/Header';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import Delete from './components/Extras/Delete';
import { useState } from 'react';
import { useDelete } from './context/delete-context';
import { useEditProfile } from './context/edit-profile-context';
import EditProfile from './components/Profile/EditProfile';
import Filter from './components/Header/Filter';
import ProfileList from './components/ProfileList/ProfileList';
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
  const [isCreateProfileModal, setIsCreateProfileModal] = useState(false);
  const {isDeleteModal} = useDelete();
  const {isEditProfileModal,setIsEditProfileModal} = useEditProfile();
  const [view, setView] = useState('grid');
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <FormControlLabel
              control={
                <Switch checked={darkMode} onChange={handleThemeChange} />
              }
              label="Dark Mode"
      />
    <div className="App d-flex d-column gap-m">
      <Header setIsCreateProfileModal={setIsCreateProfileModal} setView={setView} />
      <Filter />
      {view === 'grid' ? <ProfileGrid /> : <ProfileList />}
      {isCreateProfileModal && <CreateProfile setIsCreateProfileModal={setIsCreateProfileModal}/>}
      {isDeleteModal && <Delete />}
      {/* {isEditProfileModal && <EditProfile setIsEditProfileModal={setIsEditProfileModal}/>} */}
      <EditProfile />
    </div>
    </ThemeProvider>
  );
}

export default App;
