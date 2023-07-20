import { useContext, createContext,  useState, useEffect } from "react";
import axios from 'axios';

const ProfileContext = createContext()

const ProfileProvider = ({children}) => {
    const [data, setData] = useState();
    useEffect(() => {
        (
          async () => {
            const {data: {data: {getAllProfiles: {profiles}}}} = await axios.get('profiles.json');
            setData(profiles);
          }
        )()
      }, [])
    return(
        <ProfileContext.Provider value={{data,setData}}>
          {children}
       </ProfileContext.Provider>
    )
}

const useProfile = () => useContext(ProfileContext);

export {useProfile, ProfileProvider}