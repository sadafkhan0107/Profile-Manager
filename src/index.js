import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProfileProvider, DeleteProvider, EditProfileProvider, FilterProvider } from './context';

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
