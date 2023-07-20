import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProfileProvider } from './context/profile-context';
import { DeleteProvider } from './context/delete-context';
import { EditProfileProvider } from './context/edit-profile-context';
import { FilterProvider } from './context/filter-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <ProfileProvider>
        <DeleteProvider>
          <EditProfileProvider>
          <App />
          </EditProfileProvider>
        </DeleteProvider>
      </ProfileProvider>`
    </FilterProvider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
